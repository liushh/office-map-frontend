import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CONSTANTS } from '../constants';
import {
  selectEmptySpace,
  unselectEmptySpace,
  createNewDeskSpace
} from '../actions/index';

import { createSpace } from '../actions/space';


import EmptySpaceButton from '../components/EmptySpaceButton'


class EmptySpaces extends Component {

  haveTwoSelectedEmptySpaceTogether(emptySpace) {
    var connectedEmptySpaces = null;
    this.props.selectedEmptySpaces.forEach((item) => {
      if (this.areTwoSpacesConnected(item, emptySpace)) {
        connectedEmptySpaces = {
          existingEmptySpace: item,
          newAddedEmptySpace: emptySpace
        };
      }
    });
    return connectedEmptySpaces;
  }

  areTwoSpacesConnected(space1, space2) {
    return (
      (space1.top === space2.top && Math.abs(space1.left - space2.left) === CONSTANTS.EMPTY_SPACE_SIZE) ||
      (space1.left === space2.left && Math.abs(space1.top - space2.top) === CONSTANTS.EMPTY_SPACE_SIZE)
    );
  }

  shouldMakeASpace() {
    return this.props.selectedEmptySpaces.length >= 4;
  }

  onButtonClicked(emptySpace) {
  console.log('emptySpace on onButtonClicked emptySpace = ', emptySpace);
   if (emptySpace.isSelected) {
      this.props.unselectEmptySpace(emptySpace)
    } else {
      this.props.selectEmptySpace(emptySpace);
    }
  }

  createEmptySpaceButtons() {
    var emptySpaceButtons = [];
    for (var i = 0; i < this.props.emptySpaces.length; i++) {
      var emptySpace = this.props.emptySpaces[i];
      var backgroundColor = emptySpace.isSelected ? '#1E90FF' : '#C0C0C0';

      emptySpaceButtons.push(
        <EmptySpaceButton item={emptySpace}
                          key={emptySpace.id}
                          top={emptySpace.top}
                          left={emptySpace.left}
                          backgroundColor={backgroundColor}
                          onButtonClicked={(emptySpace) => this.onButtonClicked(emptySpace)} />
      );
    }
    return emptySpaceButtons;
  }

  render() {
    if (this.shouldMakeASpace()) {
      console.log('making a space~~~~~~~~~~~~~')
      this.props.createSpace(this.props.selectedOffice.id,
                             this.props.selectedEmptySpaces);
      // this.props.clearEmptySpaces();
    }
    return (
      <div>
        {this.createEmptySpaceButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps selectEmptySpace = ', state.selectedEmptySpaces);
  return {
    emptySpaces: state.emptySpaces,
    selectedEmptySpaces: state.selectedEmptySpaces,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    selectEmptySpace: selectEmptySpace,
    unselectEmptySpace: unselectEmptySpace,
    createNewDeskSpace: createNewDeskSpace,

    createSpace: createSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmptySpaces);

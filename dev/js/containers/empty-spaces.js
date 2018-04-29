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

  componentWillMount() {
     document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.isEnterPressed(event) && this.props.selectedEmptySpaces) {
        console.log('valid selected empty space set = ', this.props.selectedEmptySpaces.length);
        this.props.createSpace(this.props.selectedOffice.id,
                               this.props.selectedEmptySpaces);
        // this.props.clearEmptySpaces();
    } else {
      console.log('invalid selected empty spaces set!!!!!!!!!!!!!')
    }
  }

  isEnterPressed(event) {
    return event.keyCode === 13
  }

  onButtonClicked(emptySpace) {
   if (emptySpace.isSelected) {
      console.log('unselected empty space');
      this.props.unselectEmptySpace(emptySpace);
    } else if (this.isNewSelectedEmeptySpaceConnected(emptySpace)) {
      console.log('selected valid empty space');
      this.props.selectEmptySpace(emptySpace);
    }
  }

  isNewSelectedEmeptySpaceConnected(newSelectedEmptySpace) {
    console.log('checking.... isNewSelectedEmeptySpaceConnected')
    if (!this.props.selectedEmptySpaces || this.props.selectedEmptySpaces.length === 0) {
      return true;
    }
    for (let i = 0; i < this.props.selectedEmptySpaces.length; i++) {
      const selectedEmptySpace = this.props.selectedEmptySpaces[i];
      if (this.areTwoSpacesConnected(selectedEmptySpace, newSelectedEmptySpace)) {
        return true;
      }
    }
    console.log('no existing selected space is connected with the new selected space');
    return false;
  }

  areTwoSpacesConnected(space1, space2) {
    return (
      (space1.top === space2.top && Math.abs(space1.left - space2.left) === CONSTANTS.EMPTY_SPACE_SIZE) ||
      (space1.left === space2.left && Math.abs(space1.top - space2.top) === CONSTANTS.EMPTY_SPACE_SIZE)
    );
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
    return (
      <div>
        {this.createEmptySpaceButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
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

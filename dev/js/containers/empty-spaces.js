import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EmptySpaceButton from '../components/EmptySpaceButton'
import {selectEmptySpace} from '../actions/index';
import {unselectEmptySpace} from '../actions/index';
import {createNewDeskSpace} from '../actions/index';
import {CONSTANTS} from '../constants';


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

  onButtonClicked(emptySpace) {
    var connectedEmptySpaces = this.haveTwoSelectedEmptySpaceTogether(emptySpace);
    if (connectedEmptySpaces) {
      this.props.createNewDeskSpace(connectedEmptySpaces.existingEmptySpace, 
                                    connectedEmptySpaces.newAddedEmptySpace);
      this.props.unselectEmptySpace(connectedEmptySpaces.existingEmptySpace);
    } 
    else if (emptySpace.isSelected) {
      this.props.unselectEmptySpace(emptySpace)
    } 
    else {
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
    selectedEmptySpaces: state.selectedEmptySpaces
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    selectEmptySpace: selectEmptySpace,
    unselectEmptySpace: unselectEmptySpace,
    createNewDeskSpace: createNewDeskSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmptySpaces);

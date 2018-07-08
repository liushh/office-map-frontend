import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  CONSTANTS,
  EDITOR_WHITELIST,
  AUTH0_USER_EMAIL_STORE_KEY
} from '../constants';
import {
  selectEmptySpace,
  unselectEmptySpace,
  clearSelectedEmptySpaces
} from '../actions';

import { createSpace } from '../actions/space';


import EmptySpaceButton from '../components/EmptySpaceButton'


class EmptySpaces extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
     document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.isEnterPressed(event) && this.hasSelectedEmptySpaces()) {
      this.props.createSpace(this.props.selectedOffice.id,
                              this.props.selectedEmptySpaces);
      this.props.clearSelectedEmptySpaces(this.props.selectedEmptySpaces);
    }
  }

  isEnterPressed(event) {
    return event.keyCode === 13
  }

  hasSelectedEmptySpaces() {
    return this.props.selectedEmptySpaces && this.props.selectedEmptySpaces.length > 0;
  }

  onButtonClicked(emptySpace) {
    if (this.isMapEditor()) {
      if (emptySpace.isSelected) {
        this.props.unselectEmptySpace(emptySpace);
      } else if (this.isNewSelectedEmeptySpaceConnected(emptySpace)) {
        this.props.selectEmptySpace(emptySpace);
      }
    }
  }

  isMapEditor() {
    if (!this.currentUserEmail) {
      this.setCurrentUserEmail();
    }
    return  this.currentUserEmail && EDITOR_WHITELIST.includes(this.currentUserEmail);
  }

  setCurrentUserEmail() {
    this.currentUserEmail = localStorage.getItem(AUTH0_USER_EMAIL_STORE_KEY);
  }

  isNewSelectedEmeptySpaceConnected(newSelectedEmptySpace) {
    if (!this.props.selectedEmptySpaces || this.props.selectedEmptySpaces.length === 0) {
      return true;
    }
    for (let i = 0; i < this.props.selectedEmptySpaces.length; i++) {
      const selectedEmptySpace = this.props.selectedEmptySpaces[i];
      if (this.areTwoSpacesConnected(selectedEmptySpace, newSelectedEmptySpace)) {
        return true;
      }
    }
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
      var backgroundColor = emptySpace.isSelected ? '#F1948A' : '#78281F';

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
    clearSelectedEmptySpaces: clearSelectedEmptySpaces,

    createSpace: createSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmptySpaces);

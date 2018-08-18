import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from 'react-dropdown'

import {
  updateSpace,
  unselectSpace,
  deleteSpace
} from '../actions';
import {
  SPACE_TYPES,
  EMPTY_DESK,
  VISTITOR_DESK,
  EDITOR_WHITELIST,
  AUTH0_USER_EMAIL_STORE_KEY
} from '../constants';

const spaceTypes = SPACE_TYPES.map(space_type => space_type.name);

const teams = ['Engineering', 'UX', 'Marketing', 'Finance', 'None']; // TODO: fetch teams from database

class SpaceInfoPopover extends Component {

  componentWillMount() {
    document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.props.selectedSpace != null) {
      if (this.isEnterPressed(event) || this.isESCPressed(event)) {
        this.props.updateSpace(this.props.selectedSpace);
        this.props.unselectSpace();
      }
    }
  }

  isEnterPressed(event) {
    return event.keyCode === 13;
  }

  isESCPressed(event) {
    return event.keyCode === 27;
  }

  onDeleteButtonClicked() {
    this.props.deleteSpace(this.props.selectedOffice.id, this.props.selectedSpace.id);
    this.props.unselectSpace();
  }

  onSaveButtonClicked() {
    if (this.props.selectedSpace.space_type === EMPTY_DESK) {
      this.props.selectedSpace.owner_name = '';
    } else if (this.props.selectedSpace.space_type === VISTITOR_DESK) {
      this.props.selectedSpace.owner_name = 'VISTOR';
    }
    this.props.updateSpace(this.props.selectedSpace);
    this.props.unselectSpace();
  }

  onCancelButtonClicked() {
    this.props.unselectSpace();
  }

  onOnwerNameChanged(event) {
    this.props.selectedSpace.owner_name = event.target.value;
  }

  onTeamChanged(option) {
    this.props.selectedSpace.team = option.label;
  }

  onSpaceTypeChanged(option) {
    this.props.selectedSpace.space_type = option.label;
  }

  onProjectChanged(event) {
    this.props.selectedSpace.project = event.target.value;
  }


  setCurrentUserEmail() {
    this.currentUserEmail = localStorage.getItem(AUTH0_USER_EMAIL_STORE_KEY);
  }

  isMapEditor() {
    if (!this.currentUserEmail) {
      this.setCurrentUserEmail();
    }
    return  this.currentUserEmail && EDITOR_WHITELIST.includes(this.currentUserEmail);
  }

  render() {
    if (this.props.selectedSpace === null || !this.isMapEditor()) {
      return null;
    }

    var top = 0;
    if (this.props.selectedSpace.top < 300) {
      top = this.props.selectedSpace.top + 30;
    } else {
      top = this.props.selectedSpace.top - 220;
    }

    var left = 0;
    if (this.props.selectedSpace.left < 100) {
      left = this.props.selectedSpace.left;
    } else {
      left = this.props.selectedSpace.left - 100;
    }

    const constStyle = {
      top: top,
      left: left
    };
    const infoDivStyle = {
      marginBottom: 15
    };
    const buttonStyle = {
      marginRight: 8
    };

    return (
      <div className='space-info-popover' style={constStyle}>

        <div className='info'>
          <span>Name: </span>
          <input type='text'
                 defaultValue={this.props.selectedSpace.owner_name}
                 autoFocus='autofocus'
                 onChange={(event) => this.onOnwerNameChanged(event)} ></input>
        </div>

        <div className='info'>
          <div>Team</div>
          <Dropdown
            options={teams}
            onChange={(option) => this.onTeamChanged(option)}
            value={this.props.selectedSpace.team} />
        </div>

        <div className='info'>
          <div>Space Type</div>
          <Dropdown
            options={spaceTypes}
            onChange={(option) => this.onSpaceTypeChanged(option)}
            value={this.props.selectedSpace.space_type} />
        </div>

        <div className='info'>
          <span>Project: </span>
          <input type='text'
                 defaultValue={this.props.selectedSpace.project}
                 onChange={(event) => this.onProjectChanged(event)} ></input>
        </div>


        <button style={buttonStyle} onClick={() => this.onDeleteButtonClicked()}>Delete</button>
        <button style={buttonStyle} onClick={() => this.onSaveButtonClicked()}>Save</button>
        <button style={buttonStyle} onClick={() => this.onCancelButtonClicked()}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSpace: state.selectedSpace,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    updateSpace: updateSpace,
    unselectSpace: unselectSpace,
    deleteSpace: deleteSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SpaceInfoPopover);

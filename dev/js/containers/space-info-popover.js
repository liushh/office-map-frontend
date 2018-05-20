import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from 'react-dropdown'

import {
  updateSpace,
  unselectSpace,
  deleteSpace
} from '../actions';

const spaceTypes = [
    'Employee Desk',
    'Empty Desk',
    'Visitor Desk',
    'Meeting Room'
  ];

const teams = ['Engineering', 'UX', 'Marketing', 'Finance']; // TODO: fetch teams from database

class SpaceInfoPopover extends Component {

  componentWillMount() {
     document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.props.selectedSpace != null) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        this.props.unselectSpace();
      }
    }
  }

  onDeleteButtonClicked() {
    this.props.deleteSpace(this.props.selectedOffice.id, this.props.selectedSpace.id);
    this.props.unselectSpace();
  }

  onSaveButtonClicked() {
    this.props.unselectSpace();
  }

  onCancelButtonClicked() {
    this.props.unselectSpace();
  }

  onOnwerNameChanged(event) {
    this.props.selectedSpace.ownerName = event.target.value;
    this.props.updateSpace(this.props.selectedSpace);
  }

  onTeamChanged(option) {
    this.props.selectedSpace.team = option.label;
    this.props.updateSpace(this.props.selectedSpace);
  }

  onSpaceTypeChanged(option) {
    this.props.selectedSpace.space_type = option.label;
    this.props.updateSpace(this.props.selectedSpace);
  }

  onProjectChanged(event) {
    this.props.selectedSpace.prject = event.target.value;
    this.props.updateSpace(this.props.selectedSpace);
  }

  render() {
    if (this.props.selectedSpace === null) {
      return null;
    }

    var top = 0;
    if (this.props.selectedSpace.top < 220) {
      top = this.props.selectedSpace.top + 40 + 100;
    } else {
      top = this.props.selectedSpace.top - 180;
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
      marginRight: 20
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
                 onChange={(event) => this.onNameChanged(event)} ></input>
        </div>


        <button style={buttonStyle} onClick={() => this.onDeleteButtonClicked()}>Delete</button>
        <button style={buttonStyle} onClick={() => this.onSaveButtonClicked()}>Save</button>
        <button onClick={() => this.onCancelButtonClicked()}>Cancel</button>
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

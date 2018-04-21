import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateDeskSpace,
  unselectDeskSpace,
  deleteDeskSpace
} from '../actions/index';

class DeskInfoPopover extends Component {

  componentWillMount() {
     document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.props.selectedDeskSpace != null) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        this.props.unselectDeskSpace();
      }
    }
  }

  onDeleteButtonClicked() {
    this.props.deleteDeskSpace(this.props.selectedOffice.id, this.props.selectedDeskSpace);
    this.props.unselectDeskSpace();
  }

  onSaveButtonClicked() {
    this.props.unselectDeskSpace();
  }

  onCancelButtonClicked() {
    this.props.unselectDeskSpace();
  }

  onNameChanged(event) {
    this.props.selectedDeskSpace.ownerName = event.target.value;
    this.props.updateDeskSpace(this.props.selectedOffice.id, this.props.selectedDeskSpace);
  }

  render() {
    if (this.props.selectedDeskSpace === null) {
      return null;
    }

    var top = 0;
    if (this.props.selectedDeskSpace.top < 150) {
      top = this.props.selectedDeskSpace.top + 40 + 20;
    } else {
      top = this.props.selectedDeskSpace.top - 110;
    }

    var left = 0;
    if (this.props.selectedDeskSpace.left < 100) {
      left = this.props.selectedDeskSpace.left;
    } else {
      left = this.props.selectedDeskSpace.left - 100;
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
      <div className='desk-info-popover' style={constStyle}>
        <div style={infoDivStyle}>
          <span>Name: </span>
          <input type='text'
                 defaultValue={this.props.selectedDeskSpace.ownerName}
                 autoFocus='autofocus'
                 onChange={(event) => this.onNameChanged(event)} ></input>
          <span>(press Enter to save)</span>
        </div>

        <button style={buttonStyle} onClick={() => this.onDeleteButtonClicked()}>Delete</button>
        <button style={buttonStyle} onClick={() => this.onSaveButtonClicked()}>Save</button>
        <button onClick={() => this.onCancelButtonClicked()}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('selectedDeskSpace = ', state.selectedDeskSpace);
  return {
    selectedDeskSpace: state.selectedDeskSpace,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    updateDeskSpace: updateDeskSpace,
    unselectDeskSpace: unselectDeskSpace,
    deleteDeskSpace: deleteDeskSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeskInfoPopover);

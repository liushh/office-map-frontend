import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateSpace,
  unselectSpace,
  deleteSpace
} from '../actions';

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
    this.props.deleteSpace(this.props.selectedOffice.id, this.props.selectedSpace);
    this.props.unselectSpace();
  }

  onSaveButtonClicked() {
    this.props.unselectSpace();
  }

  onCancelButtonClicked() {
    this.props.unselectSpace();
  }

  onNameChanged(event) {
    this.props.selectedSpace.ownerName = event.target.value;
    this.props.updateSpace(this.props.selectedOffice.id, this.props.selectedSpace);
  }

  render() {
    if (this.props.selectedSpace === null) {
      return null;
    }

    var top = 0;
    if (this.props.selectedSpace.top < 150) {
      top = this.props.selectedSpace.top + 40 + 20;
    } else {
      top = this.props.selectedSpace.top - 110;
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
        <div style={infoDivStyle}>
          <span>Name: </span>
          <input type='text'
                 defaultValue={this.props.selectedSpace.ownerName}
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
  return {
    selectedSpace: state.selectedSpace,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  console.log('unselectSpace = ', unselectSpace);
  console.log('deleteSpace = ', deleteSpace);
  var actionCreators = {
    updateSpace: updateSpace,
    unselectSpace: unselectSpace,
    deleteSpace: deleteSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SpaceInfoPopover);

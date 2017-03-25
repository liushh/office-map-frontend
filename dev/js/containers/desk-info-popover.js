import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateDeskSpace} from '../actions/index';
import {unselectDeskSpace} from '../actions/index';
import {deleteDeskSpace} from '../actions/index';

class DeskInfoPopover extends Component {

  componentWillMount() {
     document.addEventListener("keydown", (event) => this.handleKeydown(event), false);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    // console.log('event.keyCode = ', event.keyCode);
    if (this.props.selectedDeskSpace != null) { 
      if (event.keyCode === 8) {
        // console.log('delete pressed!!!!!!!!!!!!!!!!');
        this.props.deleteDeskSpace(this.props.selectedDeskSpace);
        this.props.unselectDeskSpace();
      } else if (event.keyCode === 13 || event.keyCode === 27) {
        // console.log('close popover');
        this.props.unselectDeskSpace();
      }
    }
  }

  onNameChanged(event) {
    this.props.selectedDeskSpace.ownerName = event.target.value;
    this.props.updateDeskSpace(this.props.selectedDeskSpace);
  }

  render() {
    if (this.props.selectedDeskSpace === null) {
      return null;
    }
    const constStyle = {
      position: 'absolute',
      width: 150,
      height: 50,
      top: 50,
      left: 50,
      borderRadius: 0,
      backgroundColor: 'grey',
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid'
    };
    return (
      <div style={constStyle}>
        <span>Name:</span>
        <input type='text' 
               defaultValue={this.props.selectedDeskSpace.ownerName} 
               autoFocus='autofocus'
               onChange={(event) => this.onNameChanged(event)} ></input>
      </div>
    );
  }  
}

function mapStateToProps(state) {
  return {
    selectedDeskSpace: state.selectedDeskSpace
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

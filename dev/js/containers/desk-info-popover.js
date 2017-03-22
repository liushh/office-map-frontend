import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateDeskSpace} from '../actions/index';

class DeskInfoPopover extends Component {

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
      backgroundColor: 'red',
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
    updateDeskSpace: updateDeskSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeskInfoPopover);

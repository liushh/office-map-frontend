import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleRoomEditingMode } from '../actions/index';


class EditRoomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonTitle = this.props.isRoomEditingMode ? "Done Editing Room" : "Edit Room";
    return (
      <div
        className='edit-room-button'
        onClick={this.props.toggleRoomEditingMode}
      >
        {buttonTitle}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isRoomEditingMode: state.isRoomEditingMode
    };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    toggleRoomEditingMode: toggleRoomEditingMode
  };
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(EditRoomButton);

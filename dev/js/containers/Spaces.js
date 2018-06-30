import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpaceButton from '../components/SpaceButton';
import {
  getSpaces,
  selectSpace
 } from '../actions';

class Spaces extends Component {
  componentDidMount() {
    this.props.getSpaces(this.props.selectedOffice.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOffice.id != this.props.selectedOffice.id) {
      this.props.getSpaces(nextProps.selectedOffice.id);
    }
  }

  createSpaceButtons() {
    if (this.props.spaces) {
      return this.props.spaces.map((space, index) => {
        return (
          <SpaceButton
            key={index}
            space={space}
            selectSpace={this.props.selectSpace}
            isRoomEditingMode={this.props.isRoomEditingMode}
          />
        );
      });
    }
  }

  render() {
    return (
      <div id='spaces'>
        {this.createSpaceButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isRoomEditingMode: state.isRoomEditingMode,
    spaces: state.spaces,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    getSpaces: getSpaces,
    selectSpace: selectSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Spaces);

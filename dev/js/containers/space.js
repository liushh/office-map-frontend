import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpaceButton from '../components/SpaceButton';
import { getSpaces } from '../actions/space';

class Spaces extends Component {

  componentDidMount() {
    this.props.getSpaces('san_francisco');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOffice.id != this.props.selectedOffice.id) {
      this.props.getSpaces(nextProps.selectedOffice.id);
    }
  }

  // onButtonClicked(deskSpace) {
  //   if (this.props.selectedDeskSpace === null ||
  //       this.props.selectedDeskSpace.id != deskSpace.id) {
  //     this.props.selectDeskSpace(deskSpace);
  //   } else {
  //     this.props.unselectDeskSpace();
  //   }
  // }

  createSpaceButtons() {
    if (this.props.spaces) {
      console.log('createSpaceButtons spaces = ', this.props.spaces);
      return this.props.spaces.map((space) => {
        return (
          <SpaceButton space={space}/>
        );
      });
    }
  }

  render() {
    console.log('!!!!!!!!!!!!!!!!!');
    return (
      <div id='spaces'>
        {this.createSpaceButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('!!!!!!!!!!!!!!!!! ', state.spaces);
  return {
    spaces: state.spaces,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    getSpaces: getSpaces
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Spaces);

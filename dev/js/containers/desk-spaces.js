import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DeskSpaceButton from '../components/DeskSpaceButton'
import {selectDeskSpace} from '../actions/index';
import {unselectDeskSpace} from '../actions/index';

class DeskSpaces extends Component {

  onButtonClicked(deskSpace) {
    if (this.props.selectedDeskSpace === null || 
        this.props.selectedDeskSpace.id != deskSpace.id) {
      this.props.selectDeskSpace(deskSpace);
    } else {
      this.props.unselectDeskSpace(deskSpace);
    }
  }

  createDeskSpaceButtons() {
    var selectedDeskSpace = this.props.selectedDeskSpace;
    return this.props.deskSpaces.map((deskSpace) => {
      var backgroundColor = 'white';
      if (selectedDeskSpace && selectedDeskSpace.id === deskSpace.id) {
        backgroundColor = '#FA8072';
      } 
      return (
        <DeskSpaceButton item={deskSpace}
                         key={deskSpace.id}
                         top={deskSpace.top}
                         left={deskSpace.left} 
                         isVertical={deskSpace.isVertical}
                         backgroundColor={backgroundColor}
                         onButtonClicked={(deskSpace) => this.onButtonClicked(deskSpace)}/>
      );
    });
  }

  render() {
    // console.log('this.deskSpaces = ', this.props);
    return (
      <div>
        DESKS
        {this.createDeskSpaceButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  console.log('deskSpaces = ', state.deskSpaces);
  return {
    deskSpaces: state.deskSpaces,
    selectedDeskSpace: state.selectedDeskSpace
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    selectDeskSpace: selectDeskSpace,
    unselectDeskSpace: unselectDeskSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeskSpaces);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DeskSpaceButton from '../components/DeskSpaceButton';
import {selectDeskSpace} from '../actions/index';
import {unselectDeskSpace} from '../actions/index';
import {initDeskSpaceState} from '../actions/index';
import {fetchDeskSpaceState} from '../utils/reducer-util';


class DeskSpaces extends Component {

  componentDidMount() {
    console.log('about to fetch desk space state with office = ', this.props.selectedOffice);
    fetchDeskSpaceState(this.props.initDeskSpaceState, this.props.selectedOffice.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOffice.id != this.props.selectedOffice.id) {
      fetchDeskSpaceState(this.props.initDeskSpaceState, this.props.selectedOffice.id);
    }
  }

  onButtonClicked(deskSpace) {
    if (this.props.selectedDeskSpace === null || 
        this.props.selectedDeskSpace.id != deskSpace.id) {
      this.props.selectDeskSpace(deskSpace);
    } else {
      this.props.unselectDeskSpace();
    }
  }

  createDeskSpaceButtons() {
    var selectedDeskSpace = this.props.selectedDeskSpace;
    if (this.props.deskSpaces) {
      return this.props.deskSpaces.map((deskSpace) => {
        var isSelected = selectedDeskSpace && selectedDeskSpace.id === deskSpace.id;
        var backgroundColor = isSelected ? '#FA8072' : 'white';
      
        return (
          <DeskSpaceButton deskSpace={deskSpace}
                           isSelected={isSelected}
                           key={deskSpace.id}
                           top={deskSpace.top}
                           left={deskSpace.left} 
                           isVertical={deskSpace.isVertical}
                           backgroundColor={backgroundColor}
                           onButtonClicked={(deskSpace) => this.onButtonClicked(deskSpace)}/>
        );
      });
    }
  }

  render() {
    console.log('rendering deskSpaces');
    return (
      <div>
        {this.createDeskSpaceButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  return {
    deskSpaces: state.deskSpaces,
    selectedDeskSpace: state.selectedDeskSpace,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    initDeskSpaceState: initDeskSpaceState,
    selectDeskSpace: selectDeskSpace,
    unselectDeskSpace: unselectDeskSpace
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(DeskSpaces);

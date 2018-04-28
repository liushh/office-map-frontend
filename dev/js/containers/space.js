import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeskSpaceButton from '../components/DeskSpaceButton';
import { getSpaces } from '../actions/space';

class Spaces extends Component {

  componentDidMount() {
    // getSpaces(this.props.selectedOffice.id);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
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

  createDeskSpaceButtons() {
    // var selectedDeskSpace = this.props.selectedDeskSpace;
    // if (this.props.deskSpaces) {
    //   return this.props.deskSpaces.map((deskSpace) => {
    //     var isSelected = selectedDeskSpace && selectedDeskSpace.id === deskSpace.id;
    //     var backgroundColor = isSelected ? '#FA8072' : 'white';

    //     return (
    //       <DeskSpaceButton deskSpace={deskSpace}
    //                        isSelected={isSelected}
    //                        key={deskSpace.id}
    //                        top={deskSpace.top}
    //                        left={deskSpace.left}
    //                        isVertical={deskSpace.isVertical}
    //                        backgroundColor={backgroundColor}
    //                        onButtonClicked={(deskSpace) => this.onButtonClicked(deskSpace)}/>
    //     );
    //   });
    // }
  }

  render() {
    return (
      <div>
        {this.createDeskSpaceButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spaces: state.spaces
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    getSpaces: getSpaces
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Spaces);

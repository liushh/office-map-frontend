import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EmptySpaceButton from '../components/EmptySpaceButton'
import {selectEmptySpace} from '../actions/index';
import {unselectEmptySpace} from '../actions/index';


class EmptySpaces extends Component {

  onButtonClicked(emptySpace) {
    if (emptySpace.isSelected) {
      this.props.unselectEmptySpace(emptySpace)
    } else {
      this.props.selectEmptySpace(emptySpace);
    }
  }

  createEmptySpaceButtons() {
    var emptySpaceButtons = [];
    for (var i = 0; i < this.props.emptySpaces.length; i++) {
      var emptySpace = this.props.emptySpaces[i];
      var backgroundColor = emptySpace.isSelected ? '#1E90FF' : '#C0C0C0';
    
      emptySpaceButtons.push(
        <EmptySpaceButton item={emptySpace}
                          key={emptySpace.id}
                          top={emptySpace.top}
                          left={emptySpace.left}
                          backgroundColor={backgroundColor}
                          onButtonClicked={(emptySpace) => this.onButtonClicked(emptySpace)} />
      );
    }
    return emptySpaceButtons;
  }

  isSelected(emptySpace) {
    if (this.props.selectedEmptySpaces != null) {
      console.log('selectedEmptySpaces = ', this.props.selectedEmptySpaces);
      // return this.props.selectedEmptySpaces.indexOf(emptySpace) != -1;
      this.props.selectedEmptySpaces.forEach((currentEmptySpace) => {
        if (emptySpace.id === currentEmptySpace.id) {
          return true;
        }
      })
    }
    return false;
  }

  render() {  
    return (
      <div>
        {this.createEmptySpaceButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  // console.log('state.selectedEmptySpaces = ', state.selectedEmptySpaces);
  return {
    emptySpaces: state.emptySpaces,
    selectedEmptySpaces: state.selectedEmptySpaces
  };
}

function matchDispatchToProps(dispatch) {
  // console.log('selectEmptySpace  =', selectEmptySpace);
  var actionCreators = {
    selectEmptySpace: selectEmptySpace,
    unselectEmptySpace: unselectEmptySpace,
  };
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(EmptySpaces);

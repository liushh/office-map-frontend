import React, {Component} from 'react';
import {CONSTANTS} from '../constants';


class EmptySpaceButton extends Component {

  onButtonClicked() {
    this.props.onButtonClicked(this.props.item);
  }

  render() {
    const constStyle = {
      position: 'absolute',
      width: CONSTANTS.EMPTY_SPACE_SIZE,
      height: CONSTANTS.EMPTY_SPACE_SIZE,
      top: this.props.top,
      left: this.props.left,
      borderRadius: 0,
      backgroundColor: this.props.backgroundColor,
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid'
    };
    return (
      <div style={constStyle}
           onClick={() => this.props.onButtonClicked(this.props.item)}></div>
    );
  }  
}

export default EmptySpaceButton; 

import React, {Component} from 'react';
import {CONSTANTS} from '../constants';


class EmptySpaceButton extends Component {

  onButtonClicked() {
    this.props.onButtonClicked(this.props.item);
  }

  render() {
    const constStyle = {
      width: CONSTANTS.EMPTY_SPACE_SIZE,
      height: CONSTANTS.EMPTY_SPACE_SIZE,
      top: this.props.top,
      left: this.props.left,
      backgroundColor: this.props.backgroundColor,
    };
    return (
      <div className='map-item-button' style={constStyle}
           onClick={() => this.props.onButtonClicked(this.props.item)}></div>
    );
  }
}

export default EmptySpaceButton;

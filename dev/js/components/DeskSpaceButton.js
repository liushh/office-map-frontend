import React, {Component} from 'react';
import {CONSTANTS} from '../constants';

class DeskSpaceButton extends Component {
  
  onButtonClicked() {
    this.props.onButtonClicked(this.props.item);
  }

  render() {
    const constStyle = {
      position: 'absolute',
      width: this.props.isVertical ? CONSTANTS.EMPTY_SPACE_SIZE : CONSTANTS.EMPTY_SPACE_SIZE * 2,
      height: this.props.isVertical ? CONSTANTS.EMPTY_SPACE_SIZE * 2 : CONSTANTS.EMPTY_SPACE_SIZE,
      top: this.props.top,
      left: this.props.left,
      borderRadius: 0,
      backgroundColor: this.props.backgroundColor,
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid',

      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };

    return (
      <div style={constStyle}
          onClick={() => this.props.onButtonClicked(this.props.deskSpace)}>
        {this.props.deskSpace.ownerName}
      </div>
    );
  }  
}

export default DeskSpaceButton; 

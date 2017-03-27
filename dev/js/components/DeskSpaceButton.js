import React, {Component} from 'react';
import {CONSTANTS} from '../constants';
import classNames from 'classnames'

class DeskSpaceButton extends Component {
  
  onButtonClicked() {
    this.props.onButtonClicked(this.props.item);
  }

  render() {
    const constStyle = {
      width: this.props.isVertical ? CONSTANTS.EMPTY_SPACE_SIZE : CONSTANTS.EMPTY_SPACE_SIZE * 2,
      height: this.props.isVertical ? CONSTANTS.EMPTY_SPACE_SIZE * 2 : CONSTANTS.EMPTY_SPACE_SIZE,
      top: this.props.top,
      left: this.props.left,
      backgroundColor: this.props.backgroundColor,
    };

    var textDivClassName = classNames(
      { 'rotate-ninety': this.props.isVertical }, 
      'map-item-text-div'
    );
    return (
      <div className='map-item-button' style={constStyle}
          onClick={() => this.props.onButtonClicked(this.props.deskSpace)}>
        <div className={textDivClassName}>{this.props.deskSpace.ownerName}</div>
      </div>
    );
  }  
}

export default DeskSpaceButton; 

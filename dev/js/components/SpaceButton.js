import React, {Component} from 'react';
import { CONSTANTS } from '../constants';
import classNames from 'classnames'

class SpaceButton extends Component {
  constructor(props) {
    super(props);
    this.minTop = 10000;
    this.minLeft = 10000;
    this.maxWidth = 0;
    this.maxHeight = 0;
  }

  buildUnitLocationSet() {
    this.setMinTopAndMinLeft();

    let set = new Set([]);
    this.props.space.basic_units.forEach(unit => {
      set.add(unit.top + '-' + unit.left);
        if (unit.left - this.minLeft > this.maxWidth) {
          this.maxWidth = unit.left - this.minLeft + CONSTANTS.EMPTY_SPACE_SIZE;
        }
        if (unit.top - this.minTop > this.maxHeight) {
          this.maxHeight = unit.top - this.minTop
        }
    });
    return set;
  }

  setMinTopAndMinLeft() {
    this.props.space.basic_units.forEach(unit => {
      if (unit.top < this.minTop) {
        this.minTop = unit.top;
      }
      if (unit.left < this.minLeft) {
        this.minLeft = unit.left;
      }
    });
  }

  basicUnits() {
    const unitLocationSet = this.buildUnitLocationSet();
    const space = this.props.space;
    space.top = this.minTop;
    space.left = this.minLeft;
    return space.basic_units.map((basicUnit, index) => {
      const top = basicUnit.top;
      const left = basicUnit.left;
      const locationOnTheTop = unitLocationSet.has((top - CONSTANTS.EMPTY_SPACE_SIZE)  + '-' + left);
      const locationOnTheRight = unitLocationSet.has(top + '-' + (left + CONSTANTS.EMPTY_SPACE_SIZE));
      const locationOnTheBottom = unitLocationSet.has((top + CONSTANTS.EMPTY_SPACE_SIZE)  + '-' + left);
      const locationOnTheLeft = unitLocationSet.has(top + '-' + (left - CONSTANTS.EMPTY_SPACE_SIZE));

      const constStyle = {
        width: CONSTANTS.EMPTY_SPACE_SIZE,
        height: CONSTANTS.EMPTY_SPACE_SIZE,
        top: basicUnit.top,
        left: basicUnit.left
      };

      const isMeetingRoom = space.space_type === 'Meeting Room';
      const borderClasses = classNames(
        {

          'space-button': !isMeetingRoom,
          'room': isMeetingRoom,
          'border-top': !locationOnTheTop,
          'border-right': !locationOnTheRight,
          'border-bottom': !locationOnTheBottom,
          'border-left': !locationOnTheLeft
        }
      );
      return (
        <div
          className={borderClasses}
          key={index}
          style={constStyle}
          onClick={() => this.props.selectSpace(this.props.space)}/>
      );
    });
  }

  spaceTitle() {
    if (this.props.space.space_type === 'Meeting Room') {
      return null;
    }
    const constStyle = {
      width: this.maxWidth,
      height: CONSTANTS.EMPTY_SPACE_SIZE,
      top: this.minTop,
      left: this.minLeft,
    };
    return (
      <div className='space-button-title' style={constStyle}>
      {this.props.space.owner_name}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.basicUnits()}
        {this.spaceTitle()}
      </div>
    );
  }
}

export default SpaceButton;

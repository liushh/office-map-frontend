import React, {Component} from 'react';
import { CONSTANTS , SPACE_TYPES } from '../constants';
import classNames from 'classnames'


const spaceTypeTobackgroundColor = {};
SPACE_TYPES.forEach(spaceType => {
  spaceTypeTobackgroundColor[spaceType.name] = spaceType.backgroundColor;
});

class SpaceButton extends Component {
  constructor(props) {
    super(props);
  }

  buildUnitLocationSet() {
    this.setMinTopAndMinLeft();

    let set = new Set([]);
    this.props.space.basic_units.forEach(unit => {
      set.add(unit.top + '-' + unit.left);
        if (unit.left - this.minLeft + CONSTANTS.EMPTY_SPACE_SIZE > this.maxWidth) {
          this.maxWidth = unit.left - this.minLeft + CONSTANTS.EMPTY_SPACE_SIZE;
        }
        if (unit.top - this.minTop + CONSTANTS.EMPTY_SPACE_SIZE> this.maxHeight) {
          this.maxHeight = unit.top - this.minTop + CONSTANTS.EMPTY_SPACE_SIZE;
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
        left: basicUnit.left,
        backgroundColor: spaceTypeTobackgroundColor[space.space_type]
      };

      const isMeetingRoom = space.space_type === 'Meeting Room';
      const customClassName = classNames(
        {
          'space-button': !isMeetingRoom,
          'room': isMeetingRoom && !this.props.isRoomEditingMode,
          'editing-mode-room': isMeetingRoom && this.props.isRoomEditingMode,
          'border-top': !locationOnTheTop,
          'border-right': !locationOnTheRight,
          'border-bottom': !locationOnTheBottom,
          'border-left': !locationOnTheLeft
        }
      );
      return (
        <div
          className={customClassName}
          key={index}
          style={constStyle}
          onClick={() => this.props.selectSpace(this.props.space)}/>
      );
    });
  }

  spaceTitle(space_type) {
    let constStyle = {};
    let textRotationStyle = {};
    const isMeetingRoom = space_type === 'Meeting Room';
    if (this.maxHeight > this.maxWidth) {
      constStyle = {
        width: CONSTANTS.EMPTY_SPACE_SIZE,
        height: this.maxHeight,
        top: this.minTop,
        left: this.minLeft
      };
      textRotationStyle = {
        WebkitTransform: 'rotate(90deg)',
        transformOrigin: '10px 10px',
        height: CONSTANTS.EMPTY_SPACE_SIZE,
        width: this.maxHeight,
      }
    } else {
      constStyle = {
        width: this.maxWidth,
        height: CONSTANTS.EMPTY_SPACE_SIZE,
        top: this.minTop,
        left: this.minLeft
      };
      textRotationStyle = {
        width: this.maxWidth,
        height: CONSTANTS.EMPTY_SPACE_SIZE
      }
    }
    constStyle['color'] = isMeetingRoom ? 'white' : 'black';
    textRotationStyle['fontSize'] = isMeetingRoom ? '20px' : '10px';
    return (
      <div className='space-button-title-container' style={constStyle}>
        <p className='space-button-title-text' style={textRotationStyle}>{this.props.space.owner_name}</p>
      </div>
    );
  }

  render() {
    this.minTop = 10000;
    this.minLeft = 10000;
    this.maxWidth = 0;
    this.maxHeight = 0;
    return (
      <div>
        {this.basicUnits()}
        {this.spaceTitle(this.props.space.space_type)}
      </div>
    );
  }
}

export default SpaceButton;

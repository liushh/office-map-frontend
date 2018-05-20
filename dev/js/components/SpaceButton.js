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
    let set = new Set([]);
    this.props.space.basic_units.forEach(unit => {
      set.add(unit.top + '-' + unit.left);

      if (unit.top < this.minTop) {
        this.minTop = unit.top;
      }
      if (unit.left < this.minLeft) {
        this.minLeft = unit.left;
      }
      if (unit.left - this.minLeft > this.maxWidth) {
        this.maxWidth = unit.left - this.minLeft;
      }
      if (unit.top - this.minTop > this.maxHeight) {
        this.maxHeight = unit.top - this.minTop
      }
    });
    return set;
  }

  basicUnits() {
    const unitLocationSet = this.buildUnitLocationSet();
    this.props.space.top = this.minTop;
    this.props.space.left = this.minLeft;
    return this.props.space.basic_units.map((basicUnit, index) => {
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
        backgroundColor: 'red',
      };

      const borderClasses = classNames(
        'space-button',
        {
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
    const constStyle = {
      width: this.maxWidth + CONSTANTS.EMPTY_SPACE_SIZE,
      height: CONSTANTS.EMPTY_SPACE_SIZE * 2,
      top: this.minTop + ((this.maxHeight / CONSTANTS.EMPTY_SPACE_SIZE) / 2).toFixed(0) * CONSTANTS.EMPTY_SPACE_SIZE - CONSTANTS.EMPTY_SPACE_SIZE,
      left: this.minLeft + ((this.maxWidth / CONSTANTS.EMPTY_SPACE_SIZE) / 2).toFixed(0) * CONSTANTS.EMPTY_SPACE_SIZE - CONSTANTS.EMPTY_SPACE_SIZE,
    };
    return (
      <div className={'space-button-title'} style={constStyle}>
      {'space name'}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.basicUnits()}
        {/*this.spaceTitle()*/}
      </div>
    );
  }
}

export default SpaceButton;

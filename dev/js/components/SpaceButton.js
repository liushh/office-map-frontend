import React, {Component} from 'react';
import { CONSTANTS } from '../constants';
import classNames from 'classnames'

class SpaceButton extends Component {
  buildUnitLocationSet() {
    let set = new Set([]);
    this.props.space.basic_units.forEach(unit => {
      set.add(unit.top + '-' + unit.left);
    });
    return set;
  }

  basicUnits() {
    const unitLocationSet = this.buildUnitLocationSet();
    return this.props.space.basic_units.map((basicUnit) => {
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
        <div className={borderClasses} style={constStyle}/>
      );
    });
  }

  render() {
    console.log('space = ', this.props.space);
    return (
      <div id='space'>
        {this.basicUnits()}
      </div>
    );
  }
}

export default SpaceButton;

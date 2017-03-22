import React, {Component} from 'react';

class DeskSpaceButton extends Component {

  render() {
    const constStyle = {
      position: 'absolute',
      width: 50,
      height: 25,
      top: this.props.top,
      left: this.props.left,
      borderRadius: 0
    };
    return (
      <button style={constStyle}></button>
    );
  }  
}

export default DeskSpaceButton; 

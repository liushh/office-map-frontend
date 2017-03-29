import React, {Component} from 'react';


class RoomSpaceButton extends Component {

  render() {
    const constStyle = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,

    };
    return (
      <div className='room' style={constStyle}>
      {this.props.name}
      </div>
    );
  }  
}

export default RoomSpaceButton; 

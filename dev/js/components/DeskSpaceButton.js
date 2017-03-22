import React, {Component} from 'react';

class DeskSpaceButton extends Component {
  
  onButtonClicked() {
    this.props.onButtonClicked(this.props.item);
  }

  render() {
    const constStyle = {
      position: 'absolute',
      width: this.props.isVertical ? 25 : 50,
      height: this.props.isVertical ? 50 : 25,
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

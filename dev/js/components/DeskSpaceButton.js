import React, {Component} from 'react';

class DeskSpaceButton extends Component {

  render() {
    const constStyle = {
      position: 'absolute',
      width: this.props.isVertical ? 25 : 50,
      height: this.props.isVertical ? 50 : 25,
      top: this.props.top,
      left: this.props.left,
      borderRadius: 0,
      backgroundColor: 'white',
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid'
    };
    return (
      <div style={constStyle}></div>
    );
  }  
}

export default DeskSpaceButton; 


// import React, {Component} from 'react';

// class EmptySpaceButton extends Component {

//   onButtonClicked() {
//     this.props.onButtonClicked(this.props.item);
//   }

//   render() {
//     const constStyle = {
//       position: 'absolute',
//       width: 25,
//       height: 25,
//       top: this.props.top,
//       left: this.props.left,
//       borderRadius: 0,
//       backgroundColor: this.props.backgroundColor,
//       borderColor: '#808080',
//       borderWidth: 1,
//       borderStyle: '
//     };
//     return (
//       <div style={constStyle}
//            onClick={() => this.props.onButtonClicked(this.props.item)}></div>
//     );
//   }  
// }

// export default EmptySpaceButton; 

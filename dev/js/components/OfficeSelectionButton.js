import React, {Component} from 'react';

class OfficeSelectionButton extends Component {

  render() {
    const constStyle = {
      width: 100,
      height: 100,
      top: (10 + 100 * this.props.index),
      left: 1050,
      backgroundColor: 'red',
      position: 'absolute'
    };
    return (
      <div key={this.props.office.id} 
           style={constStyle}
           onClick={() => this.props.onButtonClicked(this.props.office)}>
      </div>
    );
  }  
}

export default OfficeSelectionButton; 

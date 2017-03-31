import React, {Component} from 'react';

class OfficeSelectionButton extends Component {

  render() {
    const constStyle = {
      width: 630,
      height: 30,
      top: 10,
      left: (10 + 630 * this.props.index),
      backgroundColor: 'red',
      position: 'absolute',
      borderRadius: 0,
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid'
    };
    return (
      <div key={this.props.office.id} 
           style={constStyle}
           onClick={() => this.props.onButtonClicked(this.props.office)}>
        {this.props.office.name}
      </div>
    );
  }  
}

export default OfficeSelectionButton; 

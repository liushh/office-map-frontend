import React, {Component} from 'react';

class OfficeSelectionButton extends Component {

  render() {
    const constStyle = {
      width: 100,
      height: 100,
      top: (10 + 100 * this.props.index),
      left: 1050,
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

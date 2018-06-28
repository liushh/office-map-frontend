import React, {Component} from 'react';

class OfficeSelectionButton extends Component {

  render() {
    const constStyle = {
      width: 420,
      height: 30,
      top: 10,
      left: (10 + 420 * this.props.index),
      backgroundColor: (this.props.isSelected ? 'white' : 'grey'),
      color: (this.props.isSelected ? 'black' : 'lightgrey'),
      position: 'absolute',
      borderRadius: 0,
      borderColor: '#808080',
      borderWidth: 1,
      borderStyle: 'solid',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textAlign: 'center',
      verticalAlign: 'middle'
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

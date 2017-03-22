import React, {Component} from 'react';
import {connect} from 'react-redux';
import DeskSpaceButton from '../components/DeskSpaceButton'

class DeskSpaces extends Component {

  createDeskSpaceButtons() {
    return this.props.deskSpaces.map((deskSpace) => {
      return (
        <DeskSpaceButton item={deskSpace}
                         key={deskSpace.id}
                         top={deskSpace.top}
                         left={deskSpace.left} 
                         isVertical={deskSpace.isVertical}/>
      );
    });
  }

  render() {
    // console.log('this.deskSpaces = ', this.props);
    return (
      <div>
        DESKS
        {this.createDeskSpaceButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  console.log('deskSpaces = ', state.deskSpaces);
  return {
    deskSpaces: state.deskSpaces
  };
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({emptySpaces: selectUser}, dispatch);
// }

export default connect(mapStateToProps)(DeskSpaces);

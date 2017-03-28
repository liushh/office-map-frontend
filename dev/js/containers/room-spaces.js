import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RoomSpaceButton from '../components/RoomSpaceButton';


class RoomSpaces extends Component {

  createRoomButtons() {
    if (this.props.roomSpaces) {
      return this.props.roomSpaces.map((roomSpace) => {
        return (
          <RoomSpaceButton deskSpace={roomSpace}
                           key={roomSpace.id}
                           name={roomSpace.name}
                           top={roomSpace.top}
                           left={roomSpace.left} 
                           height={roomSpace.height}
                           width={roomSpace.width} />
        );
      });
    }
  }

  render() {
    return (
      <div>
        {this.createRoomButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  console.log('roomSpaces = ', state.roomSpaces);
  return {
    roomSpaces: state.roomSpaces
  };
}


export default connect(mapStateToProps)(RoomSpaces);

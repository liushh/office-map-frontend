import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ROOM_SPACE_STATES } from '../constants';

import RoomSpaceButton from '../components/RoomSpaceButton';

class RoomSpaces extends Component {

  createRoomButtons() {
    if (this.props.selectedOffice) {
      return ROOM_SPACE_STATES[this.props.selectedOffice.id].map((roomSpace) => {
        return (
          <RoomSpaceButton key={roomSpace.id}
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
  return {
    roomSpaces: state.roomSpaces,
    selectedOffice: state.selectedOffice
  };
}


export default connect(mapStateToProps)(RoomSpaces);

import React from 'react';
import EmptySpaces from '../containers/empty-spaces'
import DeskSpaces from '../containers/desk-spaces'
import RoomSpaces from '../containers/room-spaces'
import DeskInfoPopover from '../containers/desk-info-popover'

require('../../scss/style.scss');


const generalInfoStyle = {
  position: 'absolute',
  width: 400,
  height: 220,
  top: 430,
  left: 570,
  borderRadius: 0,
  backgroundColor: 'white',
  borderColor: '#808080',
  borderWidth: 1,
  borderStyle: 'solid',
  padding: 10
}

const generalInfo = (
  <div style={generalInfoStyle}>
    <span>Help us to fill in your name in your desk</span>
    <br/>
    <span>Usage: </span>
    <ul> 
      <li>Use ctrl-f or cmd-f to search for a name</li>
      <li>Click a desk(the white spaces) to edit/delete related info</li>
      <li>Click two connected empty spaces(the grey spaces)to create a new desk</li>
    </ul>
    <span>Upcoming features: </span>
    <ul> 
      <li>Offices and meeting rooms</li>
      <li>Different color for available and assigned desk</li>
      <li>WL1 office version</li>
    </ul>


  </div>
)


const App = () => (
  <div>
    <EmptySpaces/>
    <DeskSpaces/>
    <RoomSpaces/>
    <DeskInfoPopover/>
    {generalInfo}
  </div>
);

export default App;

import React from 'react';
import EmptySpaces from '../containers/EmptySpaces';
import SpaceInfoPopover from '../containers/SpaceInfoPopover';
import OfficeSelectionButtons from '../containers/OfficeSelectionButtons';
import Spaces from '../containers/Spaces';
import EditRoomButton from '../containers/EditRoomButton';

require('../../scss/style.scss');

const Map = () => (
  <div>
    <EmptySpaces />
    <EditRoomButton />
    <OfficeSelectionButtons />
    <Spaces />
    <SpaceInfoPopover/>
  </div>
)

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

export {
  App,
  Map
};

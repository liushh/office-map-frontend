import React from 'react';
import EmptySpaces from '../containers/empty-spaces'
import DeskSpaces from '../containers/desk-spaces'
import DeskInfoPopover from '../containers/desk-info-popover'

// require('../../scss/style.scss');

const App = () => (
  <div>
    <h2>Hello Guadalajara</h2>
    <EmptySpaces/>
    <DeskSpaces/>
    <DeskInfoPopover/>
  </div>
);

export default App;

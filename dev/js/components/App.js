import React from 'react';
import EmptySpaces from '../containers/EmptySpaces';
import SpaceInfoPopover from '../containers/SpaceInfoPopover';
import Header from '../containers/Header';
import Spaces from '../containers/Spaces';

require('../../scss/style.scss');

const Map = () => (
  <div>
    <Header />
    <EmptySpaces />
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

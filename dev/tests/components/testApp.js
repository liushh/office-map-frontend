import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../js/components/App.js';

import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('App component renders single div with class name main-app', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.main-app').length).toEqual(1);
  });

  it('App component renders single div with class name empty-spaces', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.empty-spaces').length).toEqual(1);
  });

  it('App component renders single div with class name desk-spaces', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.desk-spaces').length).toEqual(1);
  });

  it('App component renders single div with class name room-spaces', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.room-spaces').length).toEqual(1);
  });

  it('App component renders single div with class name desk-info-popover', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.desk-info-popover').length).toEqual(1);
  });

  it('App component renders single div with class name office-selection-buttons', () => {
    const roomSpaceButton = shallow(<App />)
    expect(roomSpaceButton.find('.office-selection-buttons').length).toEqual(1);
  });
});

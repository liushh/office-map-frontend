import React from 'react';
import renderer from 'react-test-renderer';
import RoomSpaceButton from '../../js/components/RoomSpaceButton.js';

import { shallow } from 'enzyme';

describe('RoomSpaceButton (Snapshot)', () => {
  it('RoomSpaceButton component renders RoomSpaceButton as room name', () => {
    const roomSpaceButton = shallow(<RoomSpaceButton name={'RoomSpaceButton'}/>)
    expect(roomSpaceButton.find('div').text()).toEqual('RoomSpaceButton');
  });

  it('RoomSpaceButton component renders single div', () => {
    const roomSpaceButton = shallow(<RoomSpaceButton name={'RoomSpaceButton'}/>)
    expect(roomSpaceButton.find('div').length).toEqual(1);
  });

  it('RoomSpaceButton component renders single element with class name room', () => {
    const roomSpaceButton = shallow(<RoomSpaceButton name={'RoomSpaceButton'}/>)
    expect(roomSpaceButton.find('.room').length).toEqual(1);
  });
});

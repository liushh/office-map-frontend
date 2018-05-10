import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'

import { storeFake } from '../../testUtils/fakeStore'
import EmptySpaces from '../../js/containers/empty-spaces'
import EmptySpaceButton from '../../js/components/EmptySpaceButton';

describe('EmptySpaces', () => {
  let emptySpaces

  // beforeEach(() => {

  // });

  it('should render EmptySpaces', () => {
    const store = storeFake({});
    const wrapper = shallow(
      <Provider store={store}>
        <EmptySpaces />
      </Provider>
    );
    emptySpaces = wrapper.find(EmptySpaces);
    expect(emptySpaces.length).toBeTruthy();
  })

  it('should render EmptySpaces with selectedEmptySpaces prop', () => {
    const store = storeFake({
      selectedEmptySpaces: [],
      emptySpaces: []
    });
    const wrapper = mount(
      <Provider store={store}>
        <EmptySpaces />
      </Provider>
    );
    emptySpaces = wrapper.find(EmptySpaces);
    expect(emptySpaces.props().selectedEmptySpaces).toBeDefined();

  })

  it('should render sub EmptySpace component', () => {
    const store = storeFake({emptySpaces: []});
    const wrapper = mount(
      <Provider store={store}>
        <EmptySpaces />
      </Provider>
    );
    const emptySpaceButton = wrapper.find(EmptySpaceButton);
    expect(emptySpaceButton.length).toEqual(0);
  })
})

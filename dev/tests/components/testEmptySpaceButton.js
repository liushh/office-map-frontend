import React from 'react';
import renderer from 'react-test-renderer';
import EmptySpaceButton from '../../js/components/EmptySpaceButton';

// import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('EmptySpaceButton', () => {
  let emptySpaceButton;
  let onButtonClicked;

  beforeEach(() => {
    onButtonClicked = jest.fn();
    emptySpaceButton = mount(<EmptySpaceButton onButtonClicked={onButtonClicked} />);
  });

  it('EmptySpaceButton requires onButtonClicked prop', () => {
    expect(emptySpaceButton.props().onButtonClicked).toBeDefined();
  });

  it('EmptySpaceButton renders single div with class name map-item-button', () => {
    expect(emptySpaceButton.find('.map-item-button').length).toEqual(1);
  });

  it('EmptySpaceButton click calls onButtonClicked', () => {
    emptySpaceButton.simulate('click', []);
    expect(onButtonClicked).toBeCalled();  
  });
});

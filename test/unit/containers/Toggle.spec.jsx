import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ToggleComponent from '@/components/Toggle';
import Toggle from '@/containers/Toggle';
import { toggleFlag } from '@/store/actions';

jest.mock('@/store/actions', () => ({
  toggleFlag: jest.fn(),
}));

const state = {
  toggle: false,
};

let store;

beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  toggleFlag.mockReset();
  toggleFlag.mockReturnValue('return toggleFlag action');
});

describe('Toggle', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<Toggle {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<Toggle {...props} />);
    const {
      isToggleOn, onToggle,
    } = wrapper.find(ToggleComponent).props();
    expect(isToggleOn).toBe(state.toggle);
    expect(onToggle).toBeDefined();
    expect(typeof onToggle).toBe('function');
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<Toggle {...props} />);
    const {
      onToggle,
    } = wrapper.find(ToggleComponent).props();

    onToggle('flag');
    expect(toggleFlag).toHaveBeenCalledWith('flag');
    expect(store.dispatch).toHaveBeenCalledWith('return toggleFlag action');
  });
});

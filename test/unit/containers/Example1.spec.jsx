import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Example1Component from '@/components/Example1';
import ConnectedExample1 from '@/containers/Example1';
import { incrementCounter } from '@/store/actions';

jest.mock('@/store/actions', () => ({
  incrementCounter: jest.fn(),
}));

const state = {
  counter: 0,
};

let store;

beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  incrementCounter.mockReset();
  incrementCounter.mockReturnValue('return incrementCounter action');
});

describe('ConnectedExample1', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedExample1 {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedExample1 {...props} />);
    const {
      counter,
      onIncrementCounter,
    } = wrapper.find(Example1Component).props();
    expect(counter).toBe(state.counter);
    expect(onIncrementCounter).toBeDefined();
    expect(typeof onIncrementCounter).toBe('function');
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedExample1 {...props} />);
    const {
      onIncrementCounter,
    } = wrapper.find(Example1Component).props();

    onIncrementCounter();
    expect(incrementCounter).toHaveBeenCalledWith();
    expect(store.dispatch).toHaveBeenCalledWith('return incrementCounter action');
  });
});

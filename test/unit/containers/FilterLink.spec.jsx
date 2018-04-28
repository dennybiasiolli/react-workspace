import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LinkComponent from '@/components/Link';
import FilterLink from '@/containers/FilterLink';
import { setVisibilityFilter } from '@/store/actions';

jest.mock('@/store/actions', () => ({
  setVisibilityFilter: jest.fn(),
}));

const state = {
  visibilityFilter: 'abcd',
};

let store;

beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  setVisibilityFilter.mockReset();
  setVisibilityFilter.mockReturnValue('return setVisibilityFilter action');
});

describe('FilterLink', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<FilterLink {...props}>Test</FilterLink>);
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({ filter: 'abcd' });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<FilterLink {...props}>Test</FilterLink>);
    const {
      active, onClick,
    } = wrapper.find(LinkComponent).props();
    expect(active).toBe(false);
    expect(onClick).toBeDefined();
    expect(typeof onClick).toBe('function');

    wrapper.setProps({ filter: 'abcd' });
    expect(wrapper.find(LinkComponent).props().active).toBe(true);
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<FilterLink {...props}>Test</FilterLink>);
    const {
      onClick,
    } = wrapper.find(LinkComponent).props();

    onClick();
    expect(setVisibilityFilter).toHaveBeenCalledWith(undefined);
    expect(store.dispatch).toHaveBeenCalledWith('return setVisibilityFilter action');

    wrapper.setProps({ filter: 'abcd' });
    wrapper.find(LinkComponent).props().onClick();
    expect(setVisibilityFilter).toHaveBeenCalledWith('abcd');
    expect(store.dispatch).toHaveBeenCalledWith('return setVisibilityFilter action');
  });
});

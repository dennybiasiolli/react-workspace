import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ConnectedAddTodo, { AddTodo } from '@/containers/AddTodo';
import { addTodo } from '@/store/actions';

jest.mock('@/store/actions', () => ({
  addTodo: jest.fn(),
}));

const constantDate = new Date('2018-04-25T00:00:00');

/* eslint no-global-assign:off */
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

beforeEach(() => {
  addTodo.mockReset();
  addTodo.mockReturnValue('return addTodo action');
});

describe('AddTodo component', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      dispatch: jest.fn(),
    };
    const wrapper = shallow(<AddTodo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({
      completed: true,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call dispatch submitting form', () => {
    const props = {
      dispatch: jest.fn(),
    };
    const wrapper = mount(<AddTodo {...props} />);
    const clickEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.find('form').simulate('submit', clickEvent);
    expect(clickEvent.preventDefault).toHaveBeenCalledWith();
    expect(props.dispatch).not.toHaveBeenCalled();

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'My new value' } });
    input.instance().value = 'test';

    wrapper.find('form').simulate('submit', clickEvent);
    expect(clickEvent.preventDefault).toHaveBeenCalledWith();
    expect(props.dispatch).toHaveBeenCalledWith('return addTodo action');
    expect(addTodo).toHaveBeenCalledWith(1524607200000, 'test');
  });
});

describe('ConnectedAddTodo', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store: {
        getState: jest.fn(),
        subscribe: jest.fn(),
        dispatch: jest.fn(),
      },
    };
    const wrapper = shallow(<ConnectedAddTodo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

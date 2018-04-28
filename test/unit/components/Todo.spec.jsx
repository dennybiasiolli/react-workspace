import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Todo from '@/components/Todo';

describe('Todo', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      completed: false,
      text: 'test 1',
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Todo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({
      completed: true,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onClick clicking on element', () => {
    const props = {
      completed: false,
      text: 'test 1',
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Todo {...props} />);
    const clickEvent = {};
    wrapper.find('li').simulate('click', clickEvent);
    expect(props.onClick).toHaveBeenCalledWith(clickEvent);
  });
});

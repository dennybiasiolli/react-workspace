import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Todo from '@/components/Todo';
import TodoList from '@/components/TodoList';

describe('TodoList', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      todos: [
        { id: 1, completed: false, text: 'todo 1' },
        { id: 2, completed: true, text: 'todo 2' },
      ],
      onTodoClick: jest.fn(),
    };
    const wrapper = shallow(<TodoList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onTodoClick clicking on todo element', () => {
    const props = {
      todos: [
        { id: 1, completed: false, text: 'todo 1' },
        { id: 2, completed: true, text: 'todo 2' },
      ],
      onTodoClick: jest.fn(),
    };
    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find(Todo).at(0).simulate('click');
    expect(props.onTodoClick).toHaveBeenCalledWith(1);
    wrapper.find(Todo).at(1).simulate('click');
    expect(props.onTodoClick).toHaveBeenCalledWith(2);
  });
});

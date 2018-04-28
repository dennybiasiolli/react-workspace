import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TodoListComponent from '@/components/TodoList';
import VisibleTodoList from '@/containers/VisibleTodoList';
import { toggleTodo, VisibilityFilters } from '@/store/actions';

const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = VisibilityFilters;

jest.mock('@/store/actions', () => ({
  VisibilityFilters: {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
  },
  toggleTodo: jest.fn(),
}));

const state = {
  todos: [],
  visibilityFilter: SHOW_ALL,
};

let store;

beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  toggleTodo.mockReset();
  toggleTodo.mockReturnValue('return toggleTodo action');
});

describe('VisibleTodoList', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<VisibleTodoList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<VisibleTodoList {...props} />);
    const {
      todos, onTodoClick,
    } = wrapper.find(TodoListComponent).props();
    expect(todos).toBeDefined();
    expect(typeof todos).toBe('object');
    expect(todos.length).toBeDefined();
    expect(onTodoClick).toBeDefined();
    expect(typeof onTodoClick).toBe('function');
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<VisibleTodoList {...props} />);
    const {
      onTodoClick,
    } = wrapper.find(TodoListComponent).props();

    onTodoClick('id');
    expect(toggleTodo).toHaveBeenCalledWith('id');
    expect(store.dispatch).toHaveBeenCalledWith('return toggleTodo action');
  });

  test('should obtain todos from getVisibleTodos', () => {
    const props = {
      store,
    };

    state.todos = [
      { id: 1, text: 'todo 1', completed: false },
      { id: 2, text: 'todo 2', completed: true },
      { id: 3, text: 'todo 3', completed: false },
      { id: 4, text: 'todo 4', completed: true },
      { id: 5, text: 'todo 5', completed: false },
    ];
    let wrapper = shallow(<VisibleTodoList {...props} />);
    expect(wrapper.find(TodoListComponent).props().todos.length).toBe(5);

    state.visibilityFilter = SHOW_COMPLETED;
    wrapper = shallow(<VisibleTodoList {...props} />);
    expect(wrapper.find(TodoListComponent).props().todos.length).toBe(2);

    state.visibilityFilter = SHOW_ACTIVE;
    wrapper = shallow(<VisibleTodoList {...props} />);
    expect(wrapper.find(TodoListComponent).props().todos.length).toBe(3);

    state.visibilityFilter = '';
    wrapper = shallow(<VisibleTodoList {...props} />);
    expect(wrapper.find(TodoListComponent).props().todos.length).toBe(5);
  });
});

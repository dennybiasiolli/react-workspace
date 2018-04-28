import { ADD_TODO, TOGGLE_TODO } from '@/store/actionTypes';
import todosReducer from '@/store/reducers/todos';


describe('todos', () => {
  test('should return default value', () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  test('should work with ADD_TODO', () => {
    const initialState = [{ foo: 'bar' }];
    expect(todosReducer(initialState, {
      type: ADD_TODO,
      id: 'id',
      text: 'text',
    })).toEqual([
      { foo: 'bar' },
      { id: 'id', text: 'text', completed: false },
    ]);
  });

  test('should work with TOGGLE_TODO', () => {
    const initialState = [
      { id: 1, text: 'text 1', completed: false },
      { id: 2, text: 'text 2', completed: false },
      { id: 3, text: 'text 3', completed: false },
    ];
    expect(todosReducer(initialState, {
      type: TOGGLE_TODO,
      id: 2,
    })).toEqual([
      { id: 1, text: 'text 1', completed: false },
      { id: 2, text: 'text 2', completed: true },
      { id: 3, text: 'text 3', completed: false },
    ]);
  });
});

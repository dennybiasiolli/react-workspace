import { combineReducers } from 'redux';

import reducers from '@/store/reducers/index';
import counter from '@/store/reducers/counter';
import todos from '@/store/reducers/todos';
import visibilityFilter from '@/store/reducers/visibilityFilter';
import toggle from '@/store/reducers/toggle';
import temperatures from '@/store/reducers/temperatures';
import posts from '@/store/reducers/posts';

jest.mock('redux', () => ({
  combineReducers: jest.fn().mockReturnValue('return combined reducers'),
}));

describe('reducers', () => {
  test('should have all exports', () => {
    expect(combineReducers).toHaveBeenCalledWith({
      counter,
      todos,
      visibilityFilter,
      toggle,
      temperatures,
      posts,
    });
    expect(reducers).toBe('return combined reducers');
  });
});

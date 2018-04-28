import { VisibilityFilters } from '@/store/actions';
import { SET_VISIBILITY_FILTER } from '@/store/actionTypes';
import visibilityFilterReducer from '@/store/reducers/visibilityFilter';

const { SHOW_ALL } = VisibilityFilters;

describe('toggle', () => {
  test('should return default value', () => {
    expect(visibilityFilterReducer(undefined, {})).toEqual(SHOW_ALL);
  });

  test('should work with SET_VISIBILITY_FILTER', () => {
    expect(visibilityFilterReducer('foo', {
      type: SET_VISIBILITY_FILTER,
      filter: 'bar',
    })).toBe('bar');
  });
});

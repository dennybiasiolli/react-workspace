import {
  VisibilityFilters,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  toggleFlag,
  setCelsius,
  setFahrenheit,
  fetchPostsRequest,
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchPostsAsync,
} from '@/store/actions';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_FLAG,
  SET_CELSIUS,
  SET_FAHRENHEIT,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '@/store/actionTypes';


describe('actions', () => {
  test('should have VisibilityFilters object', () => {
    expect(VisibilityFilters).toEqual({
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE',
    });
  });

  test('addTodo should return expected value', () => {
    expect(addTodo('id', 'text')).toEqual({
      type: ADD_TODO,
      id: 'id',
      text: 'text',
    });
  });

  test('toggleTodo should return expected value', () => {
    expect(toggleTodo('id')).toEqual({
      type: TOGGLE_TODO,
      id: 'id',
    });
  });

  test('setVisibilityFilter should return expected value', () => {
    expect(setVisibilityFilter('filter')).toEqual({
      type: SET_VISIBILITY_FILTER,
      filter: 'filter',
    });
  });

  test('toggleFlag should return expected value', () => {
    expect(toggleFlag('flag')).toEqual({
      type: TOGGLE_FLAG,
      flag: 'flag',
    });
  });

  test('setCelsius should return expected value', () => {
    expect(setCelsius('temperature')).toEqual({
      type: SET_CELSIUS,
      temperature: 'temperature',
    });
  });

  test('setFahrenheit should return expected value', () => {
    expect(setFahrenheit('temperature')).toEqual({
      type: SET_FAHRENHEIT,
      temperature: 'temperature',
    });
  });

  test('fetchPostsRequest should return expected value', () => {
    expect(fetchPostsRequest()).toEqual({
      type: FETCH_POSTS_REQUEST,
    });
  });

  test('fetchPostsFailure should return expected value', () => {
    expect(fetchPostsFailure()).toEqual({
      type: FETCH_POSTS_FAILURE,
    });
  });

  test('fetchPostsSuccess should return expected value', () => {
    expect(fetchPostsSuccess()).toEqual({
      type: FETCH_POSTS_SUCCESS,
    });
  });

  describe('fetchPostsAsync', () => {
    test('should return a function', () => {
      const retVal1 = fetchPostsAsync();
      expect(typeof retVal1).toBe('function');
    });

    test('should dispatch and return expected value passing params', () => {
      const fnDispatch = jest.fn();
      return fetchPostsAsync('params')(fnDispatch).then(
        (retVal) => {
          expect(fnDispatch).toHaveBeenCalledWith(fetchPostsRequest());
          const expectedPosts = [
            { id: 1, description: 'First post' },
            { id: 2, description: 'Second post' },
            { id: 3, description: 'Third post' },
          ];
          expect(retVal).toEqual(expectedPosts);
          expect(fnDispatch).toHaveBeenCalledWith(fetchPostsSuccess(expectedPosts));
        },
        (err) => { expect(err).toBeUndefined(); },
      );
    });

    test('should dispatch and return expected rejection', () => {
      const fnDispatch = jest.fn();
      return fetchPostsAsync()(fnDispatch).then(
        (retVal) => { expect(retVal).toBeUndefined(); },
        (err) => {
          expect(fnDispatch).toHaveBeenCalledWith(fetchPostsRequest());
          const expectedErr = {
            description: 'No params passed',
          };
          expect(err).toEqual(expectedErr);
          expect(fnDispatch).toHaveBeenCalledWith(fetchPostsFailure(expectedErr));
        },
      );
    });
  });
});

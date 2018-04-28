import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '@/store/actionTypes';
import postsReducer from '@/store/reducers/posts';


describe('posts', () => {
  test('should return default value', () => {
    expect(postsReducer(undefined, {})).toEqual({
      isFetching: false,
      error: null,
      posts: [],
    });
  });

  test('should work with FETCH_POSTS_REQUEST', () => {
    const initialState = {
      isFetching: false,
      error: 'foo',
      posts: 'bar',
    };
    expect(postsReducer(initialState, { type: FETCH_POSTS_REQUEST })).toEqual({
      isFetching: true,
      error: null,
      posts: 'bar',
    });
  });

  test('should work with FETCH_POSTS_FAILURE', () => {
    const initialState = {
      isFetching: true,
      error: 'foo',
      posts: 'bar',
    };
    expect(postsReducer(initialState, {
      type: FETCH_POSTS_FAILURE,
      error: 'error',
    })).toEqual({
      isFetching: false,
      error: 'error',
      posts: [],
    });
  });

  test('should work with FETCH_POSTS_SUCCESS', () => {
    const initialState = {
      isFetching: true,
      error: 'foo',
      posts: 'bar',
    };
    expect(postsReducer(initialState, {
      type: FETCH_POSTS_SUCCESS,
      posts: 'posts',
    })).toEqual({
      isFetching: false,
      error: null,
      posts: 'posts',
    });
  });
});

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '@/store/actionTypes';

const defaultType = {
  isFetching: false,
  error: null,
  posts: [],
};

export default (state = defaultType, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        posts: [],
      });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        posts: action.posts,
      });
    default:
      return state;
  }
};

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
} from './actionTypes';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/* --------------- */


export const addTodo = (id, text) => ({
  type: ADD_TODO,
  id,
  text,
});


export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});


export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const toggleFlag = flag => ({
  type: TOGGLE_FLAG,
  flag,
});

export const setCelsius = temperature => ({
  type: SET_CELSIUS,
  temperature,
});

export const setFahrenheit = temperature => ({
  type: SET_FAHRENHEIT,
  temperature,
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

export const fetchPostsAsync = params =>
  (dispatch) => {
    dispatch(fetchPostsRequest());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (params) {
          const posts = [
            { id: 1, description: 'First post' },
            { id: 2, description: 'Second post' },
            { id: 3, description: 'Third post' },
          ];
          dispatch(fetchPostsSuccess(posts));
          resolve(posts);
        } else {
          const error = {
            description: 'No params passed',
          };
          dispatch(fetchPostsFailure(error));
          reject(error);
        }
      }, 500);
    });
  };

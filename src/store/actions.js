import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
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

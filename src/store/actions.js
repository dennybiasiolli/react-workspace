import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_FLAG,
  SET_CELSIUS,
  SET_FAHRENHEIT,
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

import { createStore } from 'redux';

import actions from './actions';
import actionTypes from './actionTypes';
import reducers from './reducers';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const isDev = process.env.NODE_ENV === 'development';
const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
/* istanbul ignore next line */
const reduxDevTools = hasReduxDevTools && window.__REDUX_DEVTOOLS_EXTENSION__()  // eslint-disable-line
const store = createStore(
  reducers,
  /* istanbul ignore next line */
  hasReduxDevTools && isDev && reduxDevTools,
);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
// store.subscribe(() => console.log(store.getState()));

export {
  actions,
  actionTypes,
  reducers,
  store,
};

export default store;

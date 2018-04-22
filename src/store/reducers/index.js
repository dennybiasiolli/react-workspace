import { combineReducers } from 'redux';

import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import toggle from './toggle';

export default combineReducers({
  counter,
  todos,
  visibilityFilter,
  toggle,
});

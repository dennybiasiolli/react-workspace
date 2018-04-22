import { TOGGLE_FLAG } from '@/store/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FLAG:
      return action.flag !== undefined ? action.flag : !state;
    default:
      return state;
  }
};

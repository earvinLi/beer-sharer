// Internal Dependencies
import { FRIEND_FETCH_SUCCESS } from '../actions/Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FRIEND_FETCH_SUCCESS: return action.payload;
    default: return state;
  }
};

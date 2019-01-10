// Internal Dependencies
import { FRIEND_SEARCH_INFO_UPDATE } from '../actions/Types';

const INITIAL_STATE = {
  emailToSearch: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_SEARCH_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

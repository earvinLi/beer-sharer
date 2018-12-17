// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_DELETE,
  FRIEND_SAVE,
  FRIEND_UPDATE,
} from '../actions/Types';

const INITIAL_STATE = {
  favoriteStyle: '',
  name: '',
  phone: '',
  uid: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_CREATE: return INITIAL_STATE;
    case FRIEND_DELETE: return INITIAL_STATE;
    case FRIEND_SAVE: return INITIAL_STATE;
    case FRIEND_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

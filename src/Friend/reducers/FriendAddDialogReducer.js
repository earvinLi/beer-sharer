// Internal Dependencies
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_SEARCH_INFO_UPDATE,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  emailToSearch: '',
  isOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_ADD_DIALOG_CLOSE: return { ...state, isOpen: false };
    case FRIEND_ADD_DIALOG_OPEN: return { ...state, isOpen: true };
    case FRIEND_SEARCH_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_SEARCH_INFO_UPDATE,
} from '../../App/ActionTypes';

const FORM_INITIAL_STATE = {
  emailToSearch: '',
};

const friendAddDialogReducer = (state = {}, action) => {
  switch (action.type) {
    case FRIEND_ADD_DIALOG_CLOSE: return { ...state, isFriendAddDialogOpen: false };
    case FRIEND_ADD_DIALOG_OPEN: return { ...state, isFriendAddDialogOpen: true };
    default: return state;
  }
};

const friendAddFormReducer = (state = FORM_INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_SEARCH_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

export default combineReducers({
  ...friendAddDialogReducer,
  friendAddForm: friendAddFormReducer,
});

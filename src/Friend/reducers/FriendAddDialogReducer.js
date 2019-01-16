// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_SEARCH_INFO_UPDATE,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  emailToSearch: '',
  isOpen: false,
};

const closeFriendAddDialog = state => ({ ...state, isOpen: false });

const openFriendAddDialog = state => ({ ...state, isOpen: true });

const updateFriendSearchInfo = (state, action) => ({
  ...state,
  [action.payload.prop]: action.payload.value,
});

export default createReducer(INITIAL_STATE, {
  [FRIEND_ADD_DIALOG_CLOSE]: closeFriendAddDialog,
  [FRIEND_ADD_DIALOG_OPEN]: openFriendAddDialog,
  [FRIEND_SEARCH_INFO_UPDATE]: updateFriendSearchInfo,
});

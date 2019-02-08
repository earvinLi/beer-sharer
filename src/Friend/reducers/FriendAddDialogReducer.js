// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_SEARCH_INFO_UPDATE,
  FRIEND_SEARCH_REQUEST,
  FRIEND_SEARCH_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  emailToSearch: '',
  isOpen: false,
  isSearching: false,
  userFound: {},
};

const friendAddDialogClose = state => ({ ...state, isOpen: false });

const friendAddDialogOpen = state => ({ ...state, isOpen: true });

const friendSearchInfoUpdate = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const friendSearchRequest = state => ({ ...state, isSearching: true });

const friendSearchSuccess = (state, action) => ({
  ...state,
  userFound: action.userFound,
});

export default createReducer(INITIAL_STATE, {
  [FRIEND_ADD_DIALOG_CLOSE]: friendAddDialogClose,
  [FRIEND_ADD_DIALOG_OPEN]: friendAddDialogOpen,
  [FRIEND_SEARCH_INFO_UPDATE]: friendSearchInfoUpdate,
  [FRIEND_SEARCH_REQUEST]: friendSearchRequest,
  [FRIEND_SEARCH_SUCCESS]: friendSearchSuccess,
});

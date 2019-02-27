// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_SEARCH_INFO_UPDATE,
  FRIEND_SEARCH_REQUEST,
  FRIEND_SEARCH_SUCCESS,
  FRIEND_SELECT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  emailToSearch: '',
  friendFound: {},
  friendSelected: {},
  isOpen: false,
  isSearching: false,
};

const friendAddDialogClose = state => ({ ...state, ...INITIAL_STATE });

const friendAddDialogOpen = state => ({ ...state, isOpen: true });

const friendSearchInfoUpdate = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const friendSearchRequest = state => ({ ...state, isSearching: true });

const friendSearchSuccess = (state, action) => ({
  ...state,
  friendFound: action.friendFound,
  isSearching: false,
});

const friendSelect = (state, action) => {
  const isSelected = Object.keys(state.friendSelected).length;

  return {
    ...state,
    friendSelected: isSelected ? {} : action.friendSelected,
  };
};

export default createReducer(INITIAL_STATE, {
  [FRIEND_ADD_DIALOG_CLOSE]: friendAddDialogClose,
  [FRIEND_ADD_DIALOG_OPEN]: friendAddDialogOpen,
  [FRIEND_SEARCH_INFO_UPDATE]: friendSearchInfoUpdate,
  [FRIEND_SEARCH_REQUEST]: friendSearchRequest,
  [FRIEND_SEARCH_SUCCESS]: friendSearchSuccess,
  [FRIEND_SELECT]: friendSelect,
});

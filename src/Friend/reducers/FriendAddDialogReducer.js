// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_ADD_REQUEST,
  FRIEND_ADD_SUCCESS,
  FRIEND_SEARCH_INFO_UPDATE,
  FRIEND_SEARCH_REQUEST,
  FRIEND_SEARCH_SUCCESS,
  FRIEND_SELECT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  emailToSearch: '',
  friendFound: {},
  friendSelected: {},
  isAdding: false,
  isOpen: false,
  isSearching: false,
};

// Dialog
const friendAddDialogClose = state => ({ ...state, ...INITIAL_STATE });

const friendAddDialogOpen = state => ({ ...state, isOpen: true });

// Search
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

// Select
const friendSelect = (state, action) => {
  const isSelected = Object.keys(state.friendSelected).length;

  return {
    ...state,
    friendSelected: isSelected ? {} : action.friendSelected,
  };
};

// Add
const friendAddRequest = state => ({ ...state, isAdding: true });

const friendAddSuccess = state => ({ ...state, ...INITIAL_STATE });

export default createReducer(INITIAL_STATE, {
  [FRIEND_ADD_DIALOG_CLOSE]: friendAddDialogClose,
  [FRIEND_ADD_DIALOG_OPEN]: friendAddDialogOpen,
  [FRIEND_ADD_REQUEST]: friendAddRequest,
  [FRIEND_ADD_SUCCESS]: friendAddSuccess,
  [FRIEND_SEARCH_INFO_UPDATE]: friendSearchInfoUpdate,
  [FRIEND_SEARCH_REQUEST]: friendSearchRequest,
  [FRIEND_SEARCH_SUCCESS]: friendSearchSuccess,
  [FRIEND_SELECT]: friendSelect,
});

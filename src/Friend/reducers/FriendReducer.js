// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedFriend: [],
  isFetching: false,
};

const fetchFriend = state => ({ ...state, isFetching: true });

const fetchFriendSuccess = (state, action) => ({
  ...state,
  fetchFriend: action.payload,
  isFetching: false,
});

export default createReducer(INITIAL_STATE, {
  [FRIEND_FETCH]: fetchFriend,
  [FRIEND_FETCH_SUCCESS]: fetchFriendSuccess,
});

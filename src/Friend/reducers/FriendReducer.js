// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FRIEND_FETCH_REQUEST,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedFriend: [],
  isFetching: false,
};

const friendFetchRequest = state => ({ ...state, isFetching: true });

const friendFetchSuccess = (state, action) => ({
  ...state,
  fetchedFriend: action.payload,
  isFetching: false,
});

export default createReducer(INITIAL_STATE, {
  [FRIEND_FETCH_REQUEST]: friendFetchRequest,
  [FRIEND_FETCH_SUCCESS]: friendFetchSuccess,
});

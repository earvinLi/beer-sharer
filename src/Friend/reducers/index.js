// External Dependencies
import _ from 'lodash';
import { combineReducers } from 'redux';

// Internal Dependencies
import {
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

// Local Dependencies
import FriendAddDialogReducer from './FriendAddDialogReducer';

const INITIAL_STATE = {
  fetchedFriend: [],
  isFetching: false,
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_FETCH: return { ...state, isFetching: true };
    case FRIEND_FETCH_SUCCESS:
      return {
        ...state,
        fetchedFriend: _.map(action.payload, (val, uid) => ({ ...val, uid, key: uid })),
        isFetching: false,
      };
    default: return state;
  }
};

export default combineReducers({
  ...friendReducer,
  friendAddDialog: FriendAddDialogReducer,
});

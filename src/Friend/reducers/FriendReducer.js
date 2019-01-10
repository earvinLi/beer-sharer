// External Dependencies
import _ from 'lodash';

// Internal Dependencies
import {
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
} from '../actions/Types';

const INITIAL_STATE = {
  fetchedFriend: [],
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
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

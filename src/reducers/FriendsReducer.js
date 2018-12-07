// External Dependencies
import _ from 'lodash';

// Internal Dependencies
import {
  FRIENDS_FETCH,
  FRIENDS_FETCH_SUCCESS,
} from '../actions/Types';

const INITIAL_STATE = {
  fetchedFriends: [],
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIENDS_FETCH: return { ...state, isFetching: true };
    case FRIENDS_FETCH_SUCCESS:
      return {
        ...state,
        fetchedFriends: _.map(action.payload, (val, uid) => ({ ...val, uid, key: uid })),
        isFetching: false,
      };
    default: return state;
  }
};

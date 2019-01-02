// External Dependencies
import _ from 'lodash';

// Internal Dependencies
import {
  BEER_FETCH,
  BEER_FETCH_SUCCESS,
} from '../actions/Types';

const INITIAL_STATE = {
  fetchedBeer: [],
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEER_FETCH: return { ...state, isFetching: true };
    case BEER_FETCH_SUCCESS:
      return {
        ...state,
        fetchedBeer: _.map(action.payload, (val, uid) => ({ ...val, uid, key: uid })),
        isFetching: false,
      };
    default: return state;
  }
};

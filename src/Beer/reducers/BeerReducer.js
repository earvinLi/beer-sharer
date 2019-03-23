// External Dependencies
import _ from 'lodash';

// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  BEER_FETCH_REQUEST,
  BEER_FETCH_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedBeer: [],
  isFetching: false,
};

const beerFetchRequest = state => ({ ...state, isFetching: true });

const beerFetchSuccess = (state, action) => ({
  ...state,
  fetchedBeer: _.map(action.fetchedBeer, (val, uid) => ({ ...val, uid, key: uid })),
  isFetching: false,
});

export default createReducer(INITIAL_STATE, {
  [BEER_FETCH_REQUEST]: beerFetchRequest,
  [BEER_FETCH_SUCCESS]: beerFetchSuccess,
});

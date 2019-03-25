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
  fetchedBeer: action.fetchedBeer,
  isFetching: false,
});

export default createReducer(INITIAL_STATE, {
  [BEER_FETCH_REQUEST]: beerFetchRequest,
  [BEER_FETCH_SUCCESS]: beerFetchSuccess,
});

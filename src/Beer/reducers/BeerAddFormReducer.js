// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  BEER_ADD_REQUEST,
  BEER_ADD_SUCCESS,
  BEER_INFO_UPDATE,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  brewery: '',
  id: '',
  isAdding: false,
  name: '',
  style: '',
};

const beerInfoUpdate = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const beerAddRequest = state => ({ ...state, isAdding: true });

const beerAddSuccess = state => ({ ...state, ...INITIAL_STATE });

export default createReducer(INITIAL_STATE, {
  [BEER_ADD_REQUEST]: beerAddRequest,
  [BEER_ADD_SUCCESS]: beerAddSuccess,
  [BEER_INFO_UPDATE]: beerInfoUpdate,
});

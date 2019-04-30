// External Dependencies

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  // BEER_ADD_FAIL,
  BEER_ADD_REQUEST,
  BEER_ADD_SUCCESS,
  BEER_INFO_UPDATE,
} from '../../App/ActionTypes';

// const addBeerFail = createActionCreator(BEER_ADD_FAIL, 'beerAddFailError');

export const addBeer = ({ brewery, name, style }) => async (dispatch) => {
  dispatch({ BEER_ADD_REQUEST });

  // TODO: Change to use addBeer from graphQlUtils
  console.log(brewery, name, style);

  dispatch({ type: BEER_ADD_SUCCESS });
};

export const updateBeerInfo = createActionCreator(
  BEER_INFO_UPDATE,
  'prop',
  'value',
);

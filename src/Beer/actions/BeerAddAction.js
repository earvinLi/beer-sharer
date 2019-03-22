// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  BEER_ADD_FAIL,
  BEER_ADD_REQUEST,
  BEER_ADD_SUCCESS,
  BEER_INFO_UPDATE,
} from '../../App/ActionTypes';

const addBeerFail = createActionCreator(BEER_ADD_FAIL, 'beerAddFailError');

export const addBeer = ({ brewery, name, style }) => async (dispatch, getState) => {
  dispatch({ BEER_ADD_REQUEST });

  const { accountId } = getState().Auth.account;
  const accountRef = firebase.database().ref(`/user/users/${accountId}`);

  await accountRef.child('beers')
    .push({ brewery, name, style })
    .catch(beerAddFailError => addBeerFail(beerAddFailError));

  dispatch({ type: BEER_ADD_SUCCESS });
};

export const updateBeerInfo = createActionCreator(
  BEER_INFO_UPDATE,
  'prop',
  'value',
);

// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  BEER_CREATE,
  BEER_DELETE,
  BEER_SAVE,
  BEER_FETCH,
  BEER_FETCH_SUCCESS,
  BEER_UPDATE,
} from '../../App/ActionTypes';

export const beerCreate = ({ brewery, name, style }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/beer`)
    .push({ brewery, name, style })
    .then(() => dispatch({ type: BEER_CREATE }));
};

export const beerDelete = ({ id }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/beer/${id}`)
    .remove()
    .then(() => dispatch({ type: BEER_DELETE }));
};

export const beerSave = ({
  brewery,
  id,
  name,
  style,
}) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/beer/${id}`)
    .set({ brewery, name, style })
    .then(() => dispatch({ type: BEER_SAVE }));
};

export const beerFetch = () => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  dispatch({ type: BEER_FETCH });

  firebase.database().ref(`/users/${currentUserId}/beer`)
    .on('value', (snapshot) => {
      dispatch({
        type: BEER_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

export const beerUpdate = ({ prop, value }) => ({
  type: BEER_UPDATE,
  payload: { prop, value },
});
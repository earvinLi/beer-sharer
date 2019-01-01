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
} from './Types';

export const beerCreate = ({ favoriteStyle, name, phone }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => dispatch({ type: BEER_CREATE }));
};

export const beerDelete = ({ uid }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends/${uid}`)
    .remove()
    .then(() => dispatch({ type: BEER_DELETE }));
};

export const beerSave = ({
  favoriteStyle,
  name,
  phone,
  uid,
}) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends/${uid}`)
    .set({ favoriteStyle, name, phone })
    .then(() => dispatch({ type: BEER_SAVE }));
};

export const beerFetch = () => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  dispatch({ type: BEER_FETCH });

  firebase.database().ref(`/users/${currentUserId}/friends`)
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

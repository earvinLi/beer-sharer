// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  BEER_DELETE,
  BEER_SAVE,
  BEER_FETCH,
  BEER_FETCH_SUCCESS,
} from '../../App/ActionTypes';

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
  const { accountId } = getState().Auth.account;

  dispatch({ type: BEER_FETCH });

  firebase.database().ref(`/users/${accountId}/beer`)
    .on('value', (snapshot) => {
      dispatch({
        type: BEER_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

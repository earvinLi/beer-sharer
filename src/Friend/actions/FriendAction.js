// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

export const friendAdd = () => {};

export const friendFetch = () => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  dispatch({ type: FRIEND_FETCH });

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .on('value', (snapshot) => {
      dispatch({
        type: FRIEND_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

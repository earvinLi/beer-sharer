// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

export const friendAdd = () => {};

export const friendAddDialogClose = () => ({ type: FRIEND_ADD_DIALOG_CLOSE });

export const friendAddDialogOpen = () => ({ type: FRIEND_ADD_DIALOG_OPEN });

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

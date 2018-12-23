// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_DELETE,
  FRIEND_SAVE,
  FRIENDS_FETCH,
  FRIENDS_FETCH_SUCCESS,
  FRIEND_UPDATE,
} from './Types';

export const friendCreate = ({ favoriteStyle, name, phone }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => dispatch({ type: FRIEND_CREATE }));
};

export const friendDelete = ({ uid }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends/${uid}`)
    .remove()
    .then(() => dispatch({ type: FRIEND_DELETE }));
};

export const friendSave = ({ favoriteStyle, name, phone, uid }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends/${uid}`)
    .set({ favoriteStyle, name, phone })
    .then(() => dispatch({ type: FRIEND_SAVE }));
};

export const friendsFetch = () => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  dispatch({ type: FRIENDS_FETCH });

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .on('value', snapshot => {
      dispatch({
        type: FRIENDS_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

export const friendUpdate = ({ prop, value }) => ({
  type: FRIEND_UPDATE,
  payload: { prop, value },
});

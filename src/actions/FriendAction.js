// External Dependencies
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_SAVE,
  FRIENDS_FETCH,
  FRIENDS_FETCH_SUCCESS,
  FRIEND_UPDATE,
} from './Types';

export const friendCreate = ({ favoriteStyle, name, phone }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => {
      dispatch({ type: FRIEND_CREATE });
      Actions.pop();
    });
};

export const friendDelete = ({ uid }) => getState => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.pop();
    });
};

export const friendSave = ({ favoriteStyle, name, phone, uid }) => (dispatch, getState) => {
  const { currentUserId } = getState().auth;

  firebase.database().ref(`/users/${currentUserId}/friends/${uid}`)
    .set({ favoriteStyle, name, phone })
    .then(() => {
      dispatch({ type: FRIEND_SAVE });
      Actions.pop();
    });
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

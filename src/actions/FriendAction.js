// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_FETCH_SUCCESS,
  FRIEND_UPDATE,
} from './Types';

export const friendCreate = ({ favoriteStyle, name, phone }) => dispatch => {
  const { uid: currentUserId } = firebase.auth().currentUser;

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => {
      dispatch({ type: FRIEND_CREATE });
    });
};

export const friendsFetch = () => dispatch => {
  const { uid: currentUserId } = firebase.auth().currentUser;

  firebase.database().ref(`/users/${currentUserId}/friends`)
    .on('value', snapshot => {
      dispatch({
        type: FRIEND_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

export const friendUpdate = ({ prop, value }) => ({
  type: FRIEND_UPDATE,
  payload: { prop, value },
});

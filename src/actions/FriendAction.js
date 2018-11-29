// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_FETCH_SUCCESS,
  FRIEND_UPDATE,
} from './Types';

const { currentUserId } = firebase.auth().uid;

export const friendCreate = ({ favoriteStyle, name, phone }) => dispatch => {
  firebase.database().ref(`/users/${currentUserId}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => {
      dispatch({ type: FRIEND_CREATE });
    });
};

export const friendsFetch = () => dispatch => {
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

// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_CREATE,
  FRIEND_UPDATE,
} from './Types';

export const friendCreate = ({ favoriteStyle, name, phone }) => dispatch => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/friends`)
    .push({ favoriteStyle, name, phone })
    .then(() => {
      dispatch({ type: FRIEND_CREATE });
    });
};

export const friendUpdate = ({ prop, value }) => ({
  type: FRIEND_UPDATE,
  payload: { prop, value },
});

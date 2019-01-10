// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_FETCH,
  FRIEND_FETCH_SUCCESS,
  FRIEND_SEARCH_INFO_UPDATE,
} from './Types';

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

export const friendSearch = () => {};

export const friendSearchInfoUpdate = ({ prop, value }) => ({
  type: FRIEND_SEARCH_INFO_UPDATE,
  payload: { prop, value },
});

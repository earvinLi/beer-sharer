// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  FRIEND_ADD_DIALOG_CLOSE,
  FRIEND_ADD_DIALOG_OPEN,
  FRIEND_FETCH_REQUEST,
  FRIEND_FETCH_SUCCESS,
} from '../../App/ActionTypes';

export const addFriend = () => {};

export const closeFriendAddDialog = createActionCreator(FRIEND_ADD_DIALOG_CLOSE);

export const openFriendAddDialog = createActionCreator(FRIEND_ADD_DIALOG_OPEN);

export const fetchFriend = () => (dispatch, getState) => {
  const { accountId } = getState().Auth.account;

  dispatch({ type: FRIEND_FETCH_REQUEST });

  firebase.database().ref(`/users/${accountId}/friends`)
    .on('value', (snapshot) => {
      dispatch({
        type: FRIEND_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

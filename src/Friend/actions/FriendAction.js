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
  dispatch({ type: FRIEND_FETCH_REQUEST });

  const { accountId } = getState().Auth.account;
  const accountRef = firebase.database().ref(`/user/users/${accountId}`);

  accountRef.child('friends')
    .on('value', (snapshot) => {
      dispatch({
        type: FRIEND_FETCH_SUCCESS,
        payload: snapshot.val(),
      });
    });
};

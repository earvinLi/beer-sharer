// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  FRIEND_ADD_FAIL,
  FRIEND_ADD_REQUEST,
  FRIEND_ADD_SUCCESS,
  FRIEND_SELECT,
} from '../../App/ActionTypes';

const addFriendFail = createActionCreator(FRIEND_ADD_FAIL, 'friendAddFailError');

export const addFriend = friend => async (dispatch, getState) => {
  dispatch({ type: FRIEND_ADD_REQUEST });

  const { accountId } = getState().Auth.account;
  const accountRef = firebase.database().ref(`/user/users/${accountId}`);

  await accountRef.child('friends').push(friend)
    .catch(friendAddFailError => addFriendFail(friendAddFailError));

  dispatch({ type: FRIEND_ADD_SUCCESS });
};

export const selectFriend = createActionCreator(FRIEND_SELECT, 'friendSelected');

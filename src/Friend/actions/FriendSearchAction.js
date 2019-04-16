// External Dependencies
import base64 from 'base-64';
import firebase from 'firebase';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  FRIEND_SEARCH_FAIL,
  FRIEND_SEARCH_INFO_UPDATE,
  FRIEND_SEARCH_REQUEST,
  FRIEND_SEARCH_SUCCESS,
} from '../../App/ActionTypes';

const searchFriendFail = createActionCreator(FRIEND_SEARCH_FAIL, 'searchFriendFailError');

export const searchFriend = email => async (dispatch) => {
  dispatch({ type: FRIEND_SEARCH_REQUEST });

  const encodedEmail = base64.encode(email);
  const userRef = firebase.database().ref('/user');

  const uidSnapshot = await userRef.child(`/emailToUid/${encodedEmail}`)
    .once('value')
    .catch(getUidFailError => searchFriendFail(getUidFailError));

  const userSnapshot = await userRef.child(`/users/${uidSnapshot.val()}`)
    .once('value')
    .catch(getUserFailError => searchFriendFail(getUserFailError));

  dispatch({
    type: FRIEND_SEARCH_SUCCESS,
    friendFound: userSnapshot.val(),
  });
};

export const updateFriendSearchInfo = createActionCreator(
  FRIEND_SEARCH_INFO_UPDATE,
  'prop',
  'value',
);

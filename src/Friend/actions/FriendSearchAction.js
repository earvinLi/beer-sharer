// External Dependencies
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

  const userRef = firebase.database().ref('users');
  const userSnapshot = await userRef.orderByChild('email').equalTo(email)
    .once('value')
    .catch(searchFriendFailError => searchFriendFail(searchFriendFailError));

  dispatch({
    type: FRIEND_SEARCH_SUCCESS,
    userFound: userSnapshot.val(),
  });
};

export const updateFriendSearchInfo = createActionCreator(
  FRIEND_SEARCH_INFO_UPDATE,
  'prop',
  'value',
);

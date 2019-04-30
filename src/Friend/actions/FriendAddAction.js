// External Dependencies

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  // FRIEND_ADD_FAIL,
  FRIEND_ADD_REQUEST,
  FRIEND_ADD_SUCCESS,
  FRIEND_SELECT,
} from '../../App/ActionTypes';

// const addFriendFail = createActionCreator(FRIEND_ADD_FAIL, 'friendAddFailError');

export const addFriend = friend => async (dispatch) => {
  dispatch({ type: FRIEND_ADD_REQUEST });

  // TODO: Change to use addFriend from graphQlUtils
  console.log(friend);

  dispatch({ type: FRIEND_ADD_SUCCESS });
};

export const selectFriend = createActionCreator(FRIEND_SELECT, 'friendSelected');

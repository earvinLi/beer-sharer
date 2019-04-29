// External Dependencies
import {
  API as appSyncAPI,
  graphqlOperation,
} from 'aws-amplify';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { getUser } from '../../App/graphQlUtils/queries';
import {
  FRIEND_SEARCH_FAIL,
  FRIEND_SEARCH_INFO_UPDATE,
  FRIEND_SEARCH_REQUEST,
  FRIEND_SEARCH_SUCCESS,
} from '../../App/ActionTypes';

const searchFriendFail = createActionCreator(FRIEND_SEARCH_FAIL, 'searchFriendFailError');

export const searchFriend = email => async (dispatch) => {
  dispatch({ type: FRIEND_SEARCH_REQUEST });

  const userFound = await appSyncAPI.graphql(graphqlOperation(
    getUser,
    { email },
  ))
    .catch(getUserFailError => searchFriendFail(getUserFailError));

  dispatch({
    type: FRIEND_SEARCH_SUCCESS,
    // TODO: Make the structure of the returned value better to use
    friendFound: userFound.data.getUser,
  });
};

export const updateFriendSearchInfo = createActionCreator(
  FRIEND_SEARCH_INFO_UPDATE,
  'prop',
  'value',
);

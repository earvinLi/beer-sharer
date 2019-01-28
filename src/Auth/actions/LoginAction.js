// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  LOGIN_INFO_UPDATE,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from '../../App/ActionTypes';

// TODO: Find a even better way to init redux with a current user
const loginUserSuccess = (accountId, dispatch, navigation) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    accountId,
  });

  navigation.navigate('Home');
};

const loginUserFail = createActionCreator(LOGIN_USER_FAIL, 'loginFailError');

export const updateLoginInfo = createActionCreator(
  LOGIN_INFO_UPDATE,
  'prop',
  'value',
);

export const loginUser = (email, password, navigation) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  const loggedInUser = await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(loginFailError => loginUserFail(loginFailError));

  const { uid: accountId } = loggedInUser.user;

  await AsyncStorage.setItem('accountId', accountId);

  loginUserSuccess(accountId, dispatch, navigation);
};

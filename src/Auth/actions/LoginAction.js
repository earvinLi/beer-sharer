// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { Auth as cognitoAuth } from 'aws-amplify';

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

// TODO: Change all related 'login' to 'signIn'
export const loginUser = (email, password, navigation, username) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  const cognitoSignIn = cognitoAuth.signIn({
    username,
    password,
  });

  const firebaseSignIn = firebase.auth().signInWithEmailAndPassword(email, password);

  const [cognitoSignedInUser, firebaseSignedInUser] = await Promise.all([
    cognitoSignIn.catch(cognitoSignInFailError => loginUserFail(cognitoSignInFailError)),
    firebaseSignIn.catch(firebaseSignInFailError => loginUserFail(firebaseSignInFailError)),
  ]);

  console.log(cognitoSignedInUser);

  const { uid: accountId } = firebaseSignedInUser.user;

  await AsyncStorage.setItem('accountId', accountId);

  loginUserSuccess(accountId, dispatch, navigation);
};

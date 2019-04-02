// External Dependencies
import base64 from 'base-64';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { Auth as cognitoAuth } from 'aws-amplify';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  SIGN_UP_INFO_UPDATE,
  SIGN_UP_USER_FAIL,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from '../../App/ActionTypes';

const signUpUserSuccess = (accountId, dispatch, navigation) => {
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
    accountId,
  });

  return navigation.navigate('Home');
};

const signUpUserFail = createActionCreator(SIGN_UP_USER_FAIL, 'signUpFailError');

const saveSignedUpUser = async (accountId, email, username) => {
  const encodedEmail = base64.encode(email);
  const userRef = firebase.database().ref('/user');
  const updateData = {
    [`users/${accountId}`]: { email, username },
    [`emailToUid/${encodedEmail}`]: accountId,
  };

  await userRef.update(updateData)
    .catch(saveUserFailError => signUpUserFail(saveUserFailError));
};

export const updateSignUpInfo = createActionCreator(
  SIGN_UP_INFO_UPDATE,
  'prop',
  'value',
);

export const signUpUser = (email, navigation, password, username) => async (dispatch) => {
  dispatch({ type: SIGN_UP_USER_REQUEST });

  const cognitoSignUp = cognitoAuth.signUp({
    attributes: {
      email,
    },
    password,
    username,
  });

  const firebaseSignUp = firebase.auth().createUserWithEmailAndPassword(email, password);

  const [cognitoSignedUpUser, firebaseSignedUpUser] = await Promise.all([
    cognitoSignUp.catch(cognitoSignUpFailError => signUpUserFail(cognitoSignUpFailError)),
    firebaseSignUp.catch(firebaseSignUpFailError => signUpUserFail(firebaseSignUpFailError)),
  ]);

  console.log(cognitoSignedUpUser);

  const { uid: accountId } = firebaseSignedUpUser.user;

  await AsyncStorage.setItem('accountId', accountId);

  await saveSignedUpUser(accountId, email, username);

  return signUpUserSuccess(accountId, dispatch, navigation);
};

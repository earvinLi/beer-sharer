// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

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

const saveSignedUpUser = async (accountId, email, name) => {
  await firebase.database().ref(`users/${accountId}`).set({
    username: name,
    email,
  })
    .catch(saveUserFailError => signUpUserFail(saveUserFailError));
};

export const updateSignUpInfo = createActionCreator(
  SIGN_UP_INFO_UPDATE,
  'prop',
  'value',
);

export const signUpUser = (email, name, navigation, password) => async (dispatch) => {
  dispatch({ type: SIGN_UP_USER_REQUEST });

  const signedUpUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(signUpFailError => signUpUserFail(signUpFailError));

  const { uid: accountId } = signedUpUser.user;

  await AsyncStorage.setItem('accountId', accountId);

  await saveSignedUpUser(accountId, email, name);

  return signUpUserSuccess(accountId, dispatch, navigation);
};

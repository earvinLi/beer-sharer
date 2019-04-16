// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  SIGN_OUT_USER_FAIL,
  SIGN_OUT_USER_REQUEST,
} from '../../App/ActionTypes';

const signOutUserFail = createActionCreator(SIGN_OUT_USER_FAIL, 'signOutFailError');

export const clearCache = () => {};

export const signOutUser = navigation => async (dispatch) => {
  // Solvce: This action must be a plain object
  // and the unhandled promise rejection of the second await
  dispatch({ type: SIGN_OUT_USER_REQUEST });

  await firebase.auth().signOut()
    .catch(signOutFailError => signOutUserFail(signOutFailError));

  await AsyncStorage.removeItem('accountId');

  navigation.navigate('Auth');
};

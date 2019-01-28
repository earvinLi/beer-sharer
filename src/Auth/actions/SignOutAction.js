// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import { SIGN_OUT_USER_FAIL } from '../../App/ActionTypes';

export const clearCache = () => {};

export const signOutUser = navigation => async (dispatch) => {
  await Promise.all([
    firebase.auth().signOut(),
    AsyncStorage.removeItem('accountId'),
  ]).catch((signOutError) => {
    dispatch({
      type: SIGN_OUT_USER_FAIL,
      payload: signOutError,
    });
  });

  navigation.navigate('Auth');
};

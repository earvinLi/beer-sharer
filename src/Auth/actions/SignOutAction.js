// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { SIGN_OUT_USER_FAIL } from '../../App/ActionTypes';

const signOutUserFail = createActionCreator(SIGN_OUT_USER_FAIL, 'signOutFailError');

export const clearCache = () => {};

export const signOutUser = async (navigation) => {
  // TODO: Actions must be plain objects?
  await firebase.auth().signOut()
    .catch(signOutFailError => signOutUserFail(signOutFailError));

  // TODO: Unhandled promise rejection?
  await AsyncStorage.removeItem('accountId');

  navigation.navigate('Auth');
};

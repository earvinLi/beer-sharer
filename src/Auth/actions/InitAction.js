// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import { fireBaseInitConfig } from './OuthConfig';
import {
  APP_INIT_REQUEST,
  APP_INIT_SUCCESS,
} from '../../App/ActionTypes';

export const saveAccount = () => {};

export const initApp = navigation => async (dispatch) => {
  dispatch({ type: APP_INIT_REQUEST });

  await firebase.initializeApp(fireBaseInitConfig);

  const accountId = await AsyncStorage.getItem('accountId');

  if (accountId) {
    dispatch({
      type: APP_INIT_SUCCESS,
      accountId,
    });

    return navigation.navigate('Home');
  }

  dispatch({ type: APP_INIT_SUCCESS });

  return navigation.navigate('Auth');
};

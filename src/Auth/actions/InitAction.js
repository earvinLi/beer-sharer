// External Dependencies
import Amplify, { Storage as s3Storage } from 'aws-amplify';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import {
  cognitoInitConfig,
  fireBaseInitConfig,
  s3InitConfig,
} from '../../App/Configs';
import {
  APP_INIT_REQUEST,
  APP_INIT_SUCCESS,
} from '../../App/ActionTypes';

export const setS3Config = (bucketName, accessLevel) => {
  s3Storage.configure({
    ...s3InitConfig,
    bucket: bucketName,
    level: accessLevel,
  });
};

export const initApp = navigation => async (dispatch) => {
  dispatch({ type: APP_INIT_REQUEST });

  // TODO: Call configure or initialize functions before the app mounts
  Amplify.configure({
    Auth: cognitoInitConfig,
    Storage: s3InitConfig,
  });

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

// External Dependencies
import Amplify, { Storage as s3Storage } from 'aws-amplify';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import {
  appSyncInitConfig,
  cognitoInitConfig,
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
    // The API key will expire after certain time at most a year
    // TODO: Change to a different authorization type
    ...appSyncInitConfig,
    Auth: cognitoInitConfig,
    Storage: s3InitConfig,
  });

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

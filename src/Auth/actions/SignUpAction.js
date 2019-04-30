// External Dependencies
import RNFetchBlob from 'react-native-fetch-blob';
import { AsyncStorage } from 'react-native';
import {
  Auth as cognitoAuth,
  Storage as s3Storage,
} from 'aws-amplify';

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
  // TODO: Change to use addUser from graphQlUtils
  console.log(accountId, email, username);
};

export const updateSignUpInfo = createActionCreator(
  SIGN_UP_INFO_UPDATE,
  'prop',
  'value',
);

export const signUpUser = (avatar, email, navigation, password, username) => async (dispatch) => {
  dispatch({ type: SIGN_UP_USER_REQUEST });

  const cognitoSignUp = cognitoAuth.signUp({
    attributes: {
      email,
    },
    password,
    username,
  });

  const cognitoSignedUpUser = await cognitoSignUp
    .catch(cognitoSignUpFailError => signUpUserFail(cognitoSignUpFailError));

  const accountId = cognitoSignedUpUser.attributes.sub;

  // TODO: If a user's OS is Android, we need a different form of the uri
  const avatarUri = avatar.uri.replace('file://', '');
  const readFiledAvatar = await RNFetchBlob.fs.readFile(avatarUri, 'base64');
  const buffedAvatar = Buffer.from(readFiledAvatar, 'base64');

  const uploadedAvatar = await s3Storage.put(
    `userAvatar/${username}`,
    buffedAvatar,
    { contentType: avatar.type },
  );

  console.log(uploadedAvatar);

  await AsyncStorage.setItem('accountId', accountId);

  await saveSignedUpUser(accountId, email, username);

  return signUpUserSuccess(accountId, dispatch, navigation);
};

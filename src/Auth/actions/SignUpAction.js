// External Dependencies
import RNFetchBlob from 'react-native-fetch-blob';
import { AsyncStorage } from 'react-native';
import {
  API as appSyncAPI,
  Auth as cognitoAuth,
  graphqlOperation,
  Storage as s3Storage,
} from 'aws-amplify';

// Internal Dependencies
import { addUser } from '../../App/graphQlUtils/mutations';
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
  // TODO: Create a root util to simplify the calling appSyncAPI
  // We may need to import appSyncAPI and graphqlOperation globallly
  await appSyncAPI.graphql(graphqlOperation(
    addUser,
    { email, id: accountId, username },
  ))
    .catch(addUserFailError => signUpUserFail(addUserFailError));
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

  const accountId = cognitoSignedUpUser.userSub;

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

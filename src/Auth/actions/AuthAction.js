// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  // How to deal with the alpha order here :(
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  REACH_MAIN_APP_SUCCESS,
  SIGN_OUT_USER_FAIL,
} from '../../App/ActionTypes';


// Sign In
// TODO: Clean up and find a better way to init redux with a current user
const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

const reachMainAppSuccess = (dispatch, toHomeNav, currentUserId) => {
  dispatch({
    type: REACH_MAIN_APP_SUCCESS,
    payload: currentUserId,
  });

  toHomeNav.navigate('Home');
};

export const loadApp = toAppNav => async (dispatch) => {
  const currentUserId = await AsyncStorage.getItem('currentUserId');

  if (currentUserId) return reachMainAppSuccess(dispatch, toAppNav, currentUserId);

  return toAppNav.navigate('Auth');
};

export const loginInfoUpdate = ({ prop, value }) => ({
  type: LOGIN_INFO_UPDATE,
  payload: { prop, value },
});

export const loginUser = ({ email, password, toHomeNav }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });

  // TODO: Simplify this ugliness of the following Try...Catch...
  try {
    const loggedInUser = await firebase.auth().signInWithEmailAndPassword(email, password);
    const {
      email: currentUserEmail,
      uid: currentUserId,
    } = loggedInUser.user;

    await Promise.all([
      firebase.database().ref(`/users/${currentUserId}`).update({ email: currentUserEmail }),
      AsyncStorage.setItem('currentUserId', currentUserId),
    ]);

    reachMainAppSuccess(dispatch, toHomeNav, currentUserId);
  } catch (loggingErr) {
    try {
      const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      reachMainAppSuccess(dispatch, toHomeNav, createdUser);
    } catch (creatingErr) {
      loginUserFail(dispatch);
    }
  }
};

// Sign Out
export const signOutUser = ({ toAuthNav }) => async (dispatch) => {
  await Promise.all([
    firebase.auth().signOut(),
    AsyncStorage.removeItem('currentUserId'),
  ]).catch((signOutErr) => {
    dispatch({
      type: SIGN_OUT_USER_FAIL,
      payload: signOutErr,
    });
  });

  toAuthNav.navigate('Auth');
};

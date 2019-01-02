// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  // How to deal with the alpha order here :(
  LOGIN_USER,
  LOGIN_USER_FAIL,
  REACH_MAIN_APP_SUCCESS,
} from './Types';

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
  dispatch({ type: LOGIN_USER });

  // TODO: Simplify this ugliness of the following Try...Catch
  try {
    const loggedInUser = await firebase.auth().signInWithEmailAndPassword(email, password);
    const currentUserId = loggedInUser.user.uid;

    await AsyncStorage.setItem('currentUserId', currentUserId);

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

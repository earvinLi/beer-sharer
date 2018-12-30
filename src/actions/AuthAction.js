// External Dependencies
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  // How to deal with the alpha order here :(
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from './Types';

const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

const loginUserSuccess = (dispatch, toHomeNav, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  toHomeNav.navigate('Home');
};

export const loginInfoUpdate = ({ prop, value }) => ({
  type: LOGIN_INFO_UPDATE,
  payload: { prop, value },
});

export const loginUser = ({ email, password, toHomeNav }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });

  // TODO: Simplify this ugliness of the following Try...Catch
  try {
    const [loggedInUser] = await Promise.all([
      firebase.auth().signInWithEmailAndPassword(email, password),
      AsyncStorage.setItem('hasLoggedInUser', 'Yes, he&#39;s here.'),
    ]);
    loginUserSuccess(dispatch, toHomeNav, loggedInUser);
  } catch (loggingErr) {
    try {
      const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, toHomeNav, createdUser);
    } catch (creatingErr) {
      loginUserFail(dispatch);
    }
  }
};

// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  EMAIL_CHANGE,
  // How to deal with the alpha order here :(
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGE,
} from '../actions/Types';

const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

export const emailChange = (email) => ({
   type: EMAIL_CHANGE,
   payload: email,
});

export const passwordChange = (password) => ({
  type: PASSWORD_CHANGE,
  payload: password,
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
};

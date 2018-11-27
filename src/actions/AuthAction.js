// External Dependencies
import firebase from 'firebase';

// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  // How to deal with the alpha order here :(
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '../actions/Types';

const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

const loginUserSuccess = (dispatch, user) => {
  console.log(user);

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

export const loginInfoUpdate = ({ prop, value }) => ({
   type: LOGIN_INFO_UPDATE,
   payload: { prop, value },
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

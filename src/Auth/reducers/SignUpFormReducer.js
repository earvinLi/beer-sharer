// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  SIGN_UP_INFO_UPDATE,
  SIGN_UP_USER_FAIL,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  email: '',
  isSigningUp: false,
  name: '',
  signUpFailErrorText: '',
  password: '',
};

const signUpInfoUpdate = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const signUpUserRequest = state => ({
  ...state,
  isSigningUp: true,
  signUpFailErrorText: '',
});

const signUpUserSuccess = (state, action) => ({
  ...INITIAL_STATE,
  accountId: action.accountId,
});

// TODO: Display a more clear error text
const signUpUserFail = state => ({
  ...state,
  isSigningUp: false,
  signUpFailErrorText: 'Sign Up Failed.',
});

export default createReducer(INITIAL_STATE, {
  [SIGN_UP_INFO_UPDATE]: signUpInfoUpdate,
  [SIGN_UP_USER_FAIL]: signUpUserFail,
  [SIGN_UP_USER_REQUEST]: signUpUserRequest,
  [SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
});

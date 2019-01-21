// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  REACH_MAIN_APP_SUCCESS,
  SIGN_UP_INFO_UPDATE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_FAIL,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  currentUserId: '',
  email: '',
  isLoading: false,
  name: '',
  signUpFailErrorText: '',
  password: '',
};

const updateSignUpInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const signUpUserRequest = state => ({
  ...state,
  isLoading: true,
  signUpFailErrorText: '',
});

const reachMainAppSuccess = (state, action) => ({
  ...state,
  ...INITIAL_STATE,
  currentUserId: action.currentUserId,
});

// TODO: Display a more clear error text
const signUpUserFail = state => ({
  ...state,
  isLoading: true,
  signUpFailErrorText: 'Authentication Failed.',
});

export default createReducer(INITIAL_STATE, {
  [SIGN_UP_INFO_UPDATE]: updateSignUpInfo,
  [SIGN_UP_USER_REQUEST]: signUpUserRequest,
  [REACH_MAIN_APP_SUCCESS]: reachMainAppSuccess,
  [SIGN_UP_USER_FAIL]: signUpUserFail,
});

// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  LOGIN_INFO_UPDATE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  REACH_MAIN_APP_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  currentUserId: '',
  email: '',
  isLoading: false,
  loginFailErrorText: '',
  password: '',
};

const updateLoginInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const loginUserRequest = state => ({
  ...state,
  isLoading: true,
  loginFailErrorText: '',
});

const reachMainAppSuccess = (state, action) => ({
  ...state,
  ...INITIAL_STATE,
  currentUserId: action.currentUserId,
});

// TODO: Display a more clear error text
const loginUserFail = state => ({
  ...state,
  isLoading: true,
  loginFailErrorText: 'Authentication Failed.',
});

export default createReducer(INITIAL_STATE, {
  [LOGIN_INFO_UPDATE]: updateLoginInfo,
  [LOGIN_USER_REQUEST]: loginUserRequest,
  [REACH_MAIN_APP_SUCCESS]: reachMainAppSuccess,
  [LOGIN_USER_FAIL]: loginUserFail,
});

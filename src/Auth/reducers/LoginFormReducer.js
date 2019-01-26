// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  LOGIN_INFO_UPDATE,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  email: '',
  isLoggingin: false,
  loginFailErrorText: '',
  password: '',
};

const loginInfoUpdate = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const loginUserRequest = state => ({
  ...state,
  isLoggingin: true,
  loginFailErrorText: '',
});

const loginUserSuccess = () => ({ ...INITIAL_STATE });

// TODO: Display a more clear error text
const loginUserFail = state => ({
  ...state,
  isLoggingin: false,
  loginFailErrorText: 'Authentication Failed.',
});

export default createReducer(INITIAL_STATE, {
  [LOGIN_INFO_UPDATE]: loginInfoUpdate,
  [LOGIN_USER_FAIL]: loginUserFail,
  [LOGIN_USER_REQUEST]: loginUserRequest,
  [LOGIN_USER_SUCCESS]: loginUserSuccess,
});

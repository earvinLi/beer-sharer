// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  APP_INIT_REQUEST,
  APP_INIT_SUCCESS,
  LOGIN_USER_SUCCESS,
  SIGN_UP_USER_SUCCESS,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  accountId: '',
  isInitializing: false,
};

const appInitRequest = state => ({ ...state, isInitializing: true });

const appInitSuccess = (state, action) => ({
  accountId: action.accountId,
  isInitializing: false,
});

// Param 'state' is initialized with the default value, INITIAL_STATE
const loginUserSuccess = (state, action) => ({ accountId: action.accountId });

const signUpUserSuccess = (state, action) => ({ accountId: action.accountId });

export default createReducer(INITIAL_STATE, {
  [APP_INIT_REQUEST]: appInitRequest,
  [APP_INIT_SUCCESS]: appInitSuccess,
  [LOGIN_USER_SUCCESS]: loginUserSuccess,
  [SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
});

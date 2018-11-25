// Internal Dependencies
import {
  EMAIL_CHANGE,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGE,
} from '../actions/Types';

const INITIAL_STATE = {
  email: '',
  isLoading: false,
  loginFailErrorText: '',
  password: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE: return { ...state, email: action.payload };
    case LOGIN_USER: return { ...state, loginFailErrorText: '', isLoading: true };
    // TODO:  Generate a more clear error message
    case LOGIN_USER_FAIL: return { ...state, loginFailErrorText: 'Authentication Failed.', isLoading: false };
    case LOGIN_USER_SUCCESS: return { ...state, ...INITIAL_STATE, user: action.payload };
    case PASSWORD_CHANGE: return { ...state, password: action.payload };
    default: return state;
  }
};

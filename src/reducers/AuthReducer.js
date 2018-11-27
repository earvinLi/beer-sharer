// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
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
    case LOGIN_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER: return { ...state, loginFailErrorText: '', isLoading: true };
    // TODO:  Generate a more clear error message
    case LOGIN_USER_FAIL:
      return { ...state, loginFailErrorText: 'Authentication Failed.', isLoading: false };
    case LOGIN_USER_SUCCESS: return { ...state, ...INITIAL_STATE, user: action.payload };
    default: return state;
  }
};

// Internal Dependencies
import {
  LOGIN_INFO_UPDATE,
  LOGIN_USER,
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

export default (state = INITIAL_STATE, action) => {
  // TODO: Need to handle the error when fail to sign out the user
  switch (action.type) {
    case LOGIN_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER: return { ...state, loginFailErrorText: '', isLoading: true };
    // TODO:  Generate a more clear error message
    case LOGIN_USER_FAIL:
      return { ...state, loginFailErrorText: 'Authentication Failed.', isLoading: false };
    case REACH_MAIN_APP_SUCCESS:
      return { ...state, ...INITIAL_STATE, currentUserId: action.payload };
    default: return state;
  }
};

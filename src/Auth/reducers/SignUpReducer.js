// Internal Dependencies
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
  loginFailErrorText: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  // TODO: Need to handle the error when fail to sign out the user
  switch (action.type) {
    case SIGN_UP_INFO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SIGN_UP_USER_REQUEST: return { ...state, loginFailErrorText: '', isLoading: true };
    // TODO:  Generate a more clear error message
    case SIGN_UP_USER_FAIL:
      return { ...state, loginFailErrorText: 'Authentication Failed.', isLoading: false };
    case REACH_MAIN_APP_SUCCESS:
      return { ...state, ...INITIAL_STATE, currentUserId: action.payload };
    default: return state;
  }
};

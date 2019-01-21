// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import LoginReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';

export default combineReducers({
  loginForm: LoginReducer,
  signUpForm: SignUpReducer,
});

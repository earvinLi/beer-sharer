// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AccountReducer from './AccountReducer';
import LoginFormReducer from './LoginFormReducer';
import SignUpFormReducer from './SignUpFormReducer';

export default combineReducers({
  account: AccountReducer,
  loginForm: LoginFormReducer,
  signUpForm: SignUpFormReducer,
});

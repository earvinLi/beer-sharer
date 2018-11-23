// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
});

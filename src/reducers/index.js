// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from './AuthReducer';
import FriendFormReducer from './FriendFormReducer';

export default combineReducers({
  auth: AuthReducer,
  friendForm: FriendFormReducer,
});

// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from './AuthReducer';
import FriendFormReducer from './FriendFormReducer';
import FriendsReducer from './FriendsReducer';

export default combineReducers({
  auth: AuthReducer,
  friendForm: FriendFormReducer,
  friends: FriendsReducer,
});

// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import FriendAddDialogReducer from './FriendAddDialogReducer';
import FriendReducer from './FriendReducer';

export default combineReducers({
  friendAddDialog: FriendAddDialogReducer,
  friendApiData: FriendReducer,
});

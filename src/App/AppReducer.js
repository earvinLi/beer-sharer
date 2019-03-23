// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from '../Auth/reducers';
import BeerReducer from '../Beer/reducers';
import FriendReducer from '../Friend/reducers';

export default combineReducers({
  Auth: AuthReducer,
  Beer: BeerReducer,
  Friend: FriendReducer,
});

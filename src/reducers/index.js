// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from './AuthReducer';
import BeerFormReducer from './BeerFormReducer';
import BeerReducer from './BeerReducer';
import FriendFormReducer from './FriendFormReducer';
import FriendReducer from './FriendReducer';

export default combineReducers({
  auth: AuthReducer,
  beer: BeerReducer,
  beerForm: BeerFormReducer,
  friend: FriendReducer,
  friendForm: FriendFormReducer,
});

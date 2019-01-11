// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from '../Auth/reducers/AuthReducer';
import BeerFormReducer from '../Beer/reducers/BeerFormReducer';
import BeerReducer from '../Beer/reducers/BeerReducer';
import FriendFormReducer from '../Friend/reducers/FriendFormReducer';
import FriendReducer from '../Friend/reducers/FriendReducer';

export default combineReducers({
  auth: AuthReducer,
  beer: BeerReducer,
  beerForm: BeerFormReducer,
  friend: FriendReducer,
  friendForm: FriendFormReducer,
});

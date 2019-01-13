// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AuthReducer from '../Auth/reducers/AuthReducer';
import BeerFormReducer from '../Beer/reducers/BeerFormReducer';
import BeerReducer from '../Beer/reducers/BeerReducer';
import FriendReducer from '../Friend/reducers';

export default combineReducers({
  auth: AuthReducer,
  beer: BeerReducer,
  beerForm: BeerFormReducer,
  Friend: FriendReducer,
});

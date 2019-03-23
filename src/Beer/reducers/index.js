// External Dependencies
import { combineReducers } from 'redux';

// Local Dependencies
import BeerAddFormReducer from './BeerAddFormReducer';
import BeerReducer from './BeerReducer';

export default combineReducers({
  beerAddForm: BeerAddFormReducer,
  beerApiData: BeerReducer,
});

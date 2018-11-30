// External Dependencies
import _ from 'lodash';

// Internal Dependencies
import { FRIEND_FETCH_SUCCESS } from '../actions/Types';

export default (state = {}, action) => {
  switch (action.type) {
    case FRIEND_FETCH_SUCCESS:
      return _.map(action.payload, (val, uid) => ({ ...val, uid }));
    default: return state;
  }
};

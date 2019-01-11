// Internal Dependencies
import {
  BEER_CREATE,
  BEER_DELETE,
  BEER_SAVE,
  BEER_UPDATE,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  brewery: '',
  id: '',
  name: '',
  style: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEER_CREATE: return INITIAL_STATE;
    case BEER_DELETE: return INITIAL_STATE;
    case BEER_SAVE: return INITIAL_STATE;
    case BEER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

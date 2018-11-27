import { FRIEND_UPDATE } from '../actions/Types';

const INITIAL_STATE = {
  favoriteStyle: '',
  name: '',
  phone: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIEND_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default: return state;
  }
};

// External Dependencies
// import firebase from 'firebase';

// Internal Dependencies
import {
  FRIEND_SEARCH_INFO_UPDATE,
} from '../../App/ActionTypes';

export const friendSearch = () => {};

export const friendSearchInfoUpdate = ({ prop, value }) => ({
  type: FRIEND_SEARCH_INFO_UPDATE,
  payload: { prop, value },
});

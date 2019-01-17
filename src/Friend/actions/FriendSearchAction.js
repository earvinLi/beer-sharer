// External Dependencies
// import firebase from 'firebase';

// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  FRIEND_SEARCH_INFO_UPDATE,
} from '../../App/ActionTypes';

export const friendSearch = () => {};

export const friendSearchInfoUpdate = createActionCreator(
  FRIEND_SEARCH_INFO_UPDATE,
  'prop',
  'value',
);

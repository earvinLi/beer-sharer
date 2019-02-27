// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import { FRIEND_SELECT } from '../../App/ActionTypes';

export const addFriend = () => {};

export const selectFriend = createActionCreator(FRIEND_SELECT, 'friendSelected');

// Action Helpers
export const createActionCreator = () => {};

// Reducer Helpers
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  // Idea From https://eslint.org/docs/rules/no-prototype-builtins
  const hasActionType = Object.prototype.hasOwnProperty.call(handlers, action.type);

  if (hasActionType) return handlers[action.type](state, action);

  return state;
};

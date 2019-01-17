// Action Helpers
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
export const createActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };

  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });

  return action;
};

// Reducer Helpers
// Idea from https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  // Idea from https://eslint.org/docs/rules/no-prototype-builtins
  const hasActionType = Object.prototype.hasOwnProperty.call(handlers, action.type);

  if (hasActionType) return handlers[action.type](state, action);

  return state;
};

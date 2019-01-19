// Middleware
// Idea from https://redux.js.org/recipes/reducing-boilerplate#async-action-creators
export const callApiMiddleware = ({ dispatch, getState }) => next => async (action) => {
  const {
    types,
    callApi,
    shouldCallApi = () => true,
    payload = {},
  } = action;

  // Want to change all these 'if's to a 'switch'?
  if (!types) return next(action);

  if (
    !Array.isArray(types)
    || types.length !== 3
    || !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
  }

  if (typeof callApi !== 'function') throw new Error('Expected callApi to be a function.');

  if (!shouldCallApi(getState())) return 'Our API needs some rest.';

  const [requestType, successType, failureType] = types;

  dispatch({ type: requestType, ...payload });

  try {
    const response = await callApi();
    return dispatch({ type: successType, ...payload, response });
  } catch (error) {
    return dispatch({ type: failureType, ...payload, error });
  }
};

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

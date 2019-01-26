// External Dependencies
import React from 'react';
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

// Local Dependencies
import AppNavigation from './AppNavigation';
import reducers from './AppReducer';
import { callApiMiddleware } from './RootUtilities';

// Component Definition
function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, callApiMiddleware));

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;

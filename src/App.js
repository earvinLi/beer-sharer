// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import AppNavigation from './AppNavigation';
// import AppRouter from './AppRouter';
import reducers from './reducers';
import { fireBaseInitConfig } from './OuthConfig';

// Component Definition
class App extends Component {
  componentDidMount() {
    firebase.initializeApp(fireBaseInitConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;

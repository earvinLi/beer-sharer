// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import { fireBaseInitConfig } from './OuthConfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseInitConfig);
  }

  render() {
    const store = createStore(reducers, {});

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Dependencies
import { fireBaseInitConfig } from './OuthConfig';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseInitConfig);
  }

  render() {
    const store = createStore(() => {}, {});

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';

// Internal Dependencies
import { fireBaseInitConfig } from './OuthConfig';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseInitConfig);
  }

  render() {
    return (
      <LoginForm />
    );
  }
}

export default App;

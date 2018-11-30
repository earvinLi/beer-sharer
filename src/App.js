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
// import FriendAdd from './components/FriendAdd';
import FriendsList from './components/FriendsList';
// import LoginForm from './components/LoginForm';
import reducers from './reducers';
import { fireBaseInitConfig } from './OuthConfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseInitConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        {/* <FriendAdd /> */}
        <FriendsList />
        {/* <LoginForm /> */}
      </Provider>
    );
  }
}

export default App;

// External Dependencies
import React from 'react';
import {
  Actions,
  Scene,
  Router,
} from 'react-native-router-flux';

// Internal Dependencies
import FriendAdd from './components/FriendAdd';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';

const AppRouter = () => {
  const navToFriendCreate = () => Actions.friendAdd();

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene component={LoginForm} initial key="login" title="Please Login" />
        </Scene>
        <Scene key="friendSection">
          {/* TODO Fix this multiple line bug of react-native-router-flux */}
          {/* eslint-disable */}
          <Scene component={FriendsList} initial key="friendsList" onRight={navToFriendCreate} rightTitle="Add" title="Friends" />
          {/* eslint-disable */}
          <Scene component={FriendAdd} key="friendAdd" title="Add Friend" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default AppRouter;

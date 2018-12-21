// External Dependencies
import {
  createAppContainer,
  createBottomTabNavigator,
  // createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// Internal Dependencies
// import FriendAdd from './components/FriendAdd';
// import FriendEdit from './components/FriendEdit';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';

// Component Definition
// const FriendStack = createStackNavigator({
//   FriendHome: FriendsList,
//   FriendAdd,
//   FriendEdit,
// });
//
// const BeerStack = createStackNavigator({
//   FriendHome: FriendsList,
//   FriendAdd,
//   FriendEdit,
// });
//
// const HomeTab = createBottomTabNavigator({
//   Friend: FriendStack,
//   Beer: BeerStack,
// });

const HomeTab = createBottomTabNavigator({
  Friend: FriendsList,
  Beer: FriendsList,
});

const AppNavigation = createSwitchNavigator({
  Auth: LoginForm,
  Home: HomeTab,
});

export default createAppContainer(AppNavigation);

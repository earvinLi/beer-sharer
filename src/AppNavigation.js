// External Dependencies
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// Internal Dependencies
import BeerAdd from './components/Beer/BeerAdd';
import BeerEdit from './components/Beer/BeerEdit';
import BeerList from './components/Beer/BeerList';
import FriendAdd from './components/Friend/FriendAdd';
import FriendEdit from './components/Friend/FriendEdit';
import FriendList from './components/Friend/FriendList';
import LoginForm from './components/Auth/LoginForm';

// Component Definition
const BeerStack = createStackNavigator({
  BeerHome: BeerList,
  BeerAdd,
  BeerEdit,
});

const FriendStack = createStackNavigator({
  FriendHome: FriendList,
  FriendAdd,
  FriendEdit,
});

const HomeTab = createBottomTabNavigator({
  Friend: FriendStack,
  Beer: BeerStack,
});

const AppNavigation = createSwitchNavigator({
  Auth: LoginForm,
  Home: HomeTab,
});

export default createAppContainer(AppNavigation);

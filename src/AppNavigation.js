// External Dependencies
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-native-router-flux';

// Internal Dependencies
import FriendAdd from './components/FriendAdd';
import FriendEdit from './components/FriendEdit';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';

// Component Definition
const FriendStack = createStackNavigator({
  FriendHome: FriendsList,
  FriendAdd,
  FriendEdit,
});

const BeerStack = createStackNavigator({
  FriendHome: FriendsList,
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

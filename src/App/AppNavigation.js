// External Dependencies
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// Internal Dependencies
import AppLoadingScreen from './components/Auth/AppLoadingScreen';
import BeerAdd from './components/Beer/BeerAdd';
import BeerEdit from './components/Beer/BeerEdit';
import BeerList from './components/Beer/BeerList';
import FriendAdd from './components/Friend/FriendAdd';
import FriendEdit from './components/Friend/FriendEdit';
import FriendList from './components/Friend/FriendList';
import LoginForm from './components/Auth/LoginForm';
import Settings from './components/Settings';
import SignUpForm from './components/Auth/SignUpForm';

// Component Definition
const AuthStack = createStackNavigator({
  Login: LoginForm,
  SignUp: SignUpForm,
});

const FriendStack = createStackNavigator({
  FriendHome: FriendList,
  FriendAdd,
  FriendEdit,
});

const BeerStack = createStackNavigator({
  BeerHome: BeerList,
  BeerAdd,
  BeerEdit,
});

const SettingsStack = createStackNavigator({
  SettingsHome: Settings,
});

const HomeTab = createBottomTabNavigator({
  Friend: FriendStack,
  Beer: BeerStack,
  Settings: SettingsStack,
});

const AppNavigation = createSwitchNavigator({
  AuthLoading: AppLoadingScreen,
  Auth: AuthStack,
  Home: HomeTab,
});

export default createAppContainer(AppNavigation);

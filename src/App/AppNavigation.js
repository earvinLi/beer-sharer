// External Dependencies
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// Internal Dependencies
import AppLoadingScreen from '../Auth/AppLoadingScreen';
import BeerAdd from '../Beer/BeerAdd';
import BeerEdit from '../Beer/BeerEdit';
import BeerList from '../Beer/BeerList';
import FriendList from '../Friend/FriendList';
import LoginForm from '../Auth/LoginForm';
import Settings from '../Settings';
import SignUpForm from '../Auth/SignUpForm';

// Component Definition
const AuthStack = createStackNavigator({
  Login: LoginForm,
  SignUp: SignUpForm,
});

const FriendStack = createStackNavigator({
  FriendHome: FriendList,
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

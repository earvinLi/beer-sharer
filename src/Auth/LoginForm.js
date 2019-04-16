// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import Button from '../SharedUnits/Button';
import Card from '../SharedUnits/Card';
import CardSection from '../SharedUnits/CardSection';
import Input from '../SharedUnits/Input';
import Spinner from '../SharedUnits/Spinner';

// Local Dependencies
import {
  loginUser,
  updateLoginInfo,
} from './actions/LoginAction';

// Local Variables
const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
};

// Component Definition
class LoginForm extends Component {
  static navigationOptions = { title: 'Beer Sharer' };

  constructor(props) {
    super(props);

    this.onPressLoginButton = this.onPressLoginButton.bind(this);
    this.onPressSignUpButton = this.onPressSignUpButton.bind(this);
  }

  onPressLoginButton() {
    const {
      email,
      navigation,
      onLoginUser,
      password,
      username,
    } = this.props;

    onLoginUser(email, password, navigation, username);
  }

  onPressSignUpButton() {
    const { navigation: toSignUpNav } = this.props;

    toSignUpNav.navigate('SignUp');
  }

  render() {
    const {
      email,
      isLoggingin,
      loginFailErrorText,
      onUpdateLoginInfo,
      password,
      username,
    } = this.props;

    const loginFailErrorElement = Boolean(loginFailErrorText) && (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>{loginFailErrorText}</Text>
      </View>
    );

    const loginButton = isLoggingin
      ? <Spinner size="large" />
      : <Button onPress={this.onPressLoginButton}>Login</Button>;

    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Username"
            onChange={value => onUpdateLoginInfo('username', value)}
            placeholder="Ninkasi"
            value={username}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Password"
            onChange={value => onUpdateLoginInfo('password', value)}
            placeholder="password"
            secureTextEntry
            value={password}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Email"
            onChange={value => onUpdateLoginInfo('email', value)}
            placeholder="email@gmail.com"
            value={email}
          />
        </CardSection>
        {loginFailErrorElement}
        <CardSection>
          {loginButton}
          <Button
            hasBorder={false}
            onPress={this.onPressSignUpButton}
          >
            Not a user? Sign up!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// Prop Validations
LoginForm.propTypes = {
  email: PropTypes.string,
  isLoggingin: PropTypes.bool,
  loginFailErrorText: PropTypes.string,
  navigation: PropTypes.shape({}).isRequired,
  password: PropTypes.string,
  onLoginUser: PropTypes.func.isRequired,
  onUpdateLoginInfo: PropTypes.func.isRequired,
  username: PropTypes.string,
};

LoginForm.defaultProps = {
  email: '',
  isLoggingin: false,
  loginFailErrorText: '',
  password: '',
  username: '',
};

const mapStateToProps = (state) => {
  const {
    email,
    isLoggingin,
    loginFailErrorText,
    password,
    username,
  } = state.Auth.loginForm;

  return {
    email,
    isLoggingin,
    loginFailErrorText,
    password,
    username,
  };
};

export default connect(mapStateToProps, {
  onUpdateLoginInfo: updateLoginInfo,
  onLoginUser: loginUser,
})(LoginForm);

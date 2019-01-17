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
  loginInfoUpdate,
  loginUser,
} from './actions/AuthAction';

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

  onLoginButtonPress = () => {
    const {
      email,
      navigation,
      onLoginUser,
      password,
    } = this.props;

    onLoginUser({ email, password, toHomeNav: navigation });
  }

  onSignUpButtonPress = () => {
    const { navigation: toSignUpNav } = this.props;

    toSignUpNav.navigate('SignUp');
  }

  render() {
    const {
      email,
      isLoading,
      loginFailErrorText,
      onLoginInfoUpdate,
      password,
    } = this.props;

    const loginFailErrorElement = Boolean(loginFailErrorText) && (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>{loginFailErrorText}</Text>
      </View>
    );

    const loginButton = isLoading
      ? <Spinner size="large" />
      : <Button onPress={this.onLoginButtonPress}>Login</Button>;

    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Email"
            onChange={value => onLoginInfoUpdate({ prop: 'email', value })}
            placeholder="email@gmail.com"
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Password"
            onChange={value => onLoginInfoUpdate({ prop: 'password', value })}
            placeholder="password"
            secureTextEntry
            value={password}
          />
        </CardSection>
        {loginFailErrorElement}
        <CardSection>
          {loginButton}
          <Button
            hasBorder={false}
            onPress={this.onSignUpButtonPress}
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
  isLoading: PropTypes.bool,
  loginFailErrorText: PropTypes.string,
  navigation: PropTypes.shape({}).isRequired,
  password: PropTypes.string,
  onLoginUser: PropTypes.func.isRequired,
  onLoginInfoUpdate: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  email: '',
  isLoading: false,
  loginFailErrorText: '',
  password: '',
};

const mapStateToProps = (state) => {
  const {
    email,
    isLoading,
    loginFailErrorText,
    password,
  } = state.auth;

  return {
    email,
    isLoading,
    loginFailErrorText,
    password,
  };
};

export default connect(mapStateToProps, {
  onLoginInfoUpdate: loginInfoUpdate,
  onLoginUser: loginUser,
})(LoginForm);

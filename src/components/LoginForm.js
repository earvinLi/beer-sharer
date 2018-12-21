// External Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner,
} from './shared';
import {
  loginInfoUpdate,
  loginUser,
} from '../actions';

// Component Definition
class LoginForm extends Component {
  onLoginButtonPress = async () => {
    const {
      email,
      navigation,
      onLoginUser,
      password,
    } = this.props;

    await onLoginUser({ email, password });

    navigation.navigate('Home');
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
      : <Button onPress={this.onLoginButtonPress.bind(this)}>Login</Button>;

    return (
      <View style={{ paddingTop: 36 }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              onChange={value => onLoginInfoUpdate({ prop: 'email', value })}
              placeholder="email@gmail.com"
              value={email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              onChange={value => onLoginInfoUpdate({ prop: 'password', value })}
              placeholder="password"
              secureTextEntry
              value={password}
            />
          </CardSection>
          {loginFailErrorElement}
          <CardSection>{loginButton}</CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  },
};

const mapStateToProps = state => {
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

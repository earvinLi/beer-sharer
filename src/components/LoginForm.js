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
  emailChange,
  loginUser,
  passwordChange,
} from '../actions';

// Component Definition
class LoginForm extends Component {
  onLoginButtonPress() {
    const {
      email,
      onLoginUser,
      password,
    } = this.props;

    onLoginUser({ email, password });
  }

  emailChanged(email) {
    this.props.onEmailChange(email);
  }

  passwordChanged(password) {
    this.props.onPasswordChange(password);
  }

  render() {
    const {
      email,
      isLoading,
      loginFailErrorText,
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
              onChange={this.emailChanged.bind(this)}
              placeholder="email@gmail.com"
              value={email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              onChange={this.passwordChanged.bind(this)}
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

const mapStateToProps = state => ({
  email: state.auth.email,
  isLoading: state.auth.isLoading,
  loginFailErrorText: state.auth.loginFailErrorText,
  password: state.auth.password,
});

export default connect(mapStateToProps, {
  onEmailChange: emailChange,
  onLoginUser: loginUser,
  onPasswordChange: passwordChange,
})(LoginForm);

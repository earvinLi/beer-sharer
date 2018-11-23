// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import {
  Button,
  Card,
  CardSection,
  Input,
} from './shared';
import {
  emailChange,
  passwordChange,
} from '../actions';

class LoginForm extends Component {
  onLoginButtonPress() {
    const {
      email,
      password,
    } = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password);
      });
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
      password,
    } = this.props;

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
          <CardSection>
            <Button onPress={this.onLoginButtonPress.bind(this)}>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(mapStateToProps, {
  onEmailChange: emailChange,
  onPasswordChange: passwordChange,
})(LoginForm);

// External Dependencies
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

// Internal Dependencies
import {
  Button,
  Card,
  CardSection,
  Input,
} from './shared';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  onLoginButtonPress() {
    const {
      email,
      password,
    } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user));
  }

  render() {
    return (
      <View style={{ paddingTop: 36 }}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              onChange={email => this.setState({ email })}
              placeholder="email@gmail.com"
              value={this.state.email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              onChange={password => this.setState({ password })}
              placeholder="password"
              secureTextEntry
              value={this.state.password}
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

export default LoginForm;

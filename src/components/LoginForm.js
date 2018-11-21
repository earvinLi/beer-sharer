import React, { Component } from 'react';
import { View } from 'react-native';

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
              value={this.state.password}
            />
          </CardSection>
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;

import React from 'react';
import { View } from 'react-native';

import {
  Button,
  Card,
  CardSection,
  Input,
} from './shared';

const LoginForm = () => {
  return (
    <View style={{ paddingTop: 36 }}>
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    </View>
  );
};

export default LoginForm;

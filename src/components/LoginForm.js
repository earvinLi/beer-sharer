import React from 'react';

import {
  Button,
  Card,
  CardSection,
  Input,
} from './shared';

const LoginForm = () => {
  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
        />
      </CardSection>
      <CardSection>
        <Input
          label="password"
          placeholder="password"
        />
      </CardSection>
      <CardSection>
        <Button>Login</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;

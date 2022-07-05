import { Input } from '@/presentation/components/Input';
import React, { FunctionComponent } from 'react';

import { LoginContainer, LoginForm } from '@/shared/pages/login';

export const Login: FunctionComponent = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <Input
          name="name"
          label="Name"
          placeholder="Enter your Name"
          error="ouve algum erro inesperado"
        />
      </LoginForm>
    </LoginContainer>
  );
};

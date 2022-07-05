import { Input, InputForm } from '@/presentation/components/Input';
import React, { FunctionComponent } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { Button } from '@/presentation/components/Button';
import { Link } from 'react-router-dom';

export const Login: FunctionComponent = () => {
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');

  return (
    <FormContainer>
      <Form>
        <h2>Login MyUnsplash</h2>

        <FormContent>
          <InputForm
            value={email}
            SetValue={SetEmail}
            name="email"
            label="Email"
            placeholder="Enter your Email"
          >
            <i className="ri-mail-line"></i>
          </InputForm>

          <InputForm
            value={password}
            SetValue={SetPassword}
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
          >
            <i className="ri-lock-password-line"></i>
          </InputForm>
          <Button text="Login">
            <i className="ri-login-circle-line"></i>
          </Button>
        </FormContent>
        <p>
          You don't have an account? <Link to="/user/signup">SignUp</Link>
        </p>
      </Form>
    </FormContainer>
  );
};

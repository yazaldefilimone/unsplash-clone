import React, { FunctionComponent } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { InputForm } from '@/presentation/components/Input';
import { Button } from '@/presentation/components/Button';
import { Link } from 'react-router-dom';
import logo from '@/shared/assets/images/logo.svg';

export const SignUp: FunctionComponent = () => {
  const [name, SetName] = React.useState('');
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');

  return (
    <FormContainer>
      <Form>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <FormContent>
          <InputForm
            value={name}
            SetValue={SetName}
            name="name"
            label="Name"
            placeholder="Enter your Name"
          >
            <i className="ri-user-6-line"></i>
          </InputForm>

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

          <Button text="SigUp">
            <i className="ri-user-add-line"></i>
          </Button>
        </FormContent>
        <p>
          Do you already have an account? <Link to="/user/login">Login</Link>
        </p>
      </Form>
    </FormContainer>
  );
};

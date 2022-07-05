import { Button } from '@/presentation/components/Button';
import { InputForm } from '@/presentation/components/Input';
import { Form, FormContainer, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';

export const User: FunctionComponent = () => {
  const [name, SetName] = React.useState('');
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');

  return (
    <FormContainer>
      <Form>
        <h2>Your Config Information</h2>

        <FormContent>
          <InputForm
            disable={true}
            value={name}
            SetValue={SetName}
            name="name"
            label="Name"
            placeholder={name}
          >
            <i className="ri-user-6-line"></i>
          </InputForm>

          <InputForm
            disable={true}
            value={email}
            SetValue={SetEmail}
            name="email"
            label="Email"
            placeholder={email}
          >
            <i className="ri-mail-line"></i>
          </InputForm>

          <InputForm
            disable={true}
            value={password}
            SetValue={SetPassword}
            type="password"
            name="password"
            label="Password"
            placeholder={password}
          >
            <i className="ri-lock-password-line"></i>
          </InputForm>

          <Button text="Edit">
            <i className="ri-user-add-line"></i>
          </Button>
        </FormContent>
      </Form>
    </FormContainer>
  );
};

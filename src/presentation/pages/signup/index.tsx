import React, { FunctionComponent } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { InputForm } from '@/presentation/components/Input';
import { Button } from '@/presentation/components/Button';
import { Link } from 'react-router-dom';

export const SignUp: FunctionComponent = () => {
  return (
    <FormContainer>
      <Form>
        <h2>SignUp MyUnsplash</h2>

        <FormContent>
          <InputForm name="name" label="Name" placeholder="Enter your Name">
            <i className="ri-user-6-line"></i>
          </InputForm>

          <InputForm name="email" label="Email" placeholder="Enter your Email">
            <i className="ri-mail-line"></i>
          </InputForm>

          <InputForm type="password" name="password" label="Password" placeholder="Enter your password">
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

import { Input, InputForm } from '@/presentation/components/Input';
import React, { FunctionComponent } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { Button } from '@/presentation/components/Button';
import { Link } from 'react-router-dom';
import logo from '@/shared/assets/images/logo.svg';
import { ILoginUserUseCase } from '@/domain/usecases/user';

type LoginProps = {
  // loginUserUseCase: ILoginUserUseCase;
};
export const Login: FunctionComponent<LoginProps> = () => {
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  async function handlerSubmit() {
    // const result = await loginUserUseCase.perform({ name: 'eu', email, password });
    // console.log(result);
  }
  return (
    <FormContainer>
      <Form>
        <div>
          <img src={logo} alt="logo" />
        </div>
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
          <Button text="Login" SetActive={handlerSubmit}>
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

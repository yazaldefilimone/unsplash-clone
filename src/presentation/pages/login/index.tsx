import { Input, InputForm } from '@/presentation/components/Input';
import React, { FunctionComponent, useState } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { Button } from '@/presentation/components/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '@/shared/assets/images/logo.svg';
import { IAuthUserUseCase, ILoginUserUseCase } from '@/domain/usecases/user';
import { IToastProps, Toast } from '@/presentation/components/Toast';
import { useAuth } from '@/presentation/hooks/useAuth';

type LoginProps = {
  loginUserUseCase: ILoginUserUseCase;
  authUserUseCase: IAuthUserUseCase;
};

export const Login: FunctionComponent<LoginProps> = ({ loginUserUseCase, authUserUseCase }) => {
  const [toast, SetToast] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [errorOrSuccess, SetErrorOrSuccess] = useState<IToastProps>({} as IToastProps);
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const navigate = useNavigate();
  const { SetCurrentUser } = useAuth();

  async function handlerSubmit() {
    try {
      SetLoading(true);
      const result = await loginUserUseCase.perform({ email, password });
      console.log(result);
      SetLoading(false);
      if (result.isLeft()) {
        SetErrorOrSuccess({
          message: result.value.message,
          status: 'Error',
        });

        SetToast(true);
        return 0;
      }
      const auth = await authUserUseCase.perform();

      SetLoading(false);

      if (auth.isRight()) {
        SetCurrentUser(auth.value);
      }

      SetErrorOrSuccess({
        message: 'login user successfully',
        status: 'Success',
      });

      SetToast(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (error: any) {
      SetLoading(false);
      SetErrorOrSuccess({
        message: error.message,
        status: 'Error',
      });
    } finally {
      SetLoading(false);
    }
  }

  return (
    <>
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
            <Button text="Login" SetActive={handlerSubmit} spinner={loading}>
              <i className="ri-login-circle-line"></i>
            </Button>
          </FormContent>
          <p>
            You don't have an account? <Link to="/user/signup">SignUp</Link>
          </p>
        </Form>
      </FormContainer>
      <Toast
        value={toast}
        SetValue={SetToast}
        status={errorOrSuccess?.status}
        message={errorOrSuccess?.message}
      />
    </>
  );
};

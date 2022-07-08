import React, { FunctionComponent } from 'react';

import { FormContainer, Form, FormContent } from '@/shared/styles/Form';
import { InputForm } from '@/presentation/components/Input';
import { Button } from '@/presentation/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/shared/assets/images/logo.svg';
import { IAuthUserUseCase, ILoginUserUseCase, ISignupUserUseCase } from '@/domain/usecases/user';
import { IToastProps, Toast } from '@/presentation/components/Toast';
import { useAuth } from '@/presentation/hooks/useAuth';

type SignUpProps = {
  signupUserUseCase: ISignupUserUseCase;
  loginUserUseCase: ILoginUserUseCase;
  authUserUseCase: IAuthUserUseCase;
};
export const SignUp: FunctionComponent<SignUpProps> = ({
  signupUserUseCase,
  loginUserUseCase,
  authUserUseCase,
}) => {
  const [name, SetName] = React.useState('');
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const navigate = useNavigate();
  const [toast, SetToast] = React.useState(false);
  const [loading, SetLoading] = React.useState(false);
  const [errorOrSuccess, SetErrorOrSuccess] = React.useState<IToastProps>({} as IToastProps);
  const { SetCurrentUser } = useAuth();

  async function handlerSubmit() {
    try {
      SetLoading(true);
      const result = await signupUserUseCase.perform({ name, email, password });
      if (result.isLeft()) {
        SetLoading(false);

        SetErrorOrSuccess({
          message: result.value.message,
          status: 'Error',
        });

        SetToast(true);
        return 0;
      }
      const response = await loginUserUseCase.perform({ email, password });

      if (response.isLeft()) {
        navigate('/user/login');
      }
      const auth = await authUserUseCase.perform();
      SetLoading(false);

      if (auth.isRight()) {
        SetCurrentUser(auth.value);
      }
      SetErrorOrSuccess({
        message: 'create user successfully',
        status: 'Success',
      });
      SetToast(true);

      setTimeout(() => navigate('/'), 2002);
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

            <Button text="SigUp" SetActive={handlerSubmit} spinner={loading}>
              <i className="ri-user-add-line"></i>
            </Button>
          </FormContent>
          <p>
            Do you already have an account? <Link to="/user/login">Login</Link>
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

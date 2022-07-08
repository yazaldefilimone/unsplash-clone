import { SignupUserUseCase, AuthUserUseCase, LoginUserUseCase } from '@/data/usecases/user';

import { LocalStorageAdapter } from '@/infrastructure/cache';
import { AxiosHttpClient } from '@/infrastructure/http';
import { Login } from '@/presentation/pages/login';
import { SignUp } from '@/presentation/pages/signup';
import { FunctionComponent } from 'react';

const axiosHttpClient = new AxiosHttpClient();
const localStorageAdapter = new LocalStorageAdapter();

export const LoginFactory: FunctionComponent = () => {
  const loginUserUseCase = new LoginUserUseCase(axiosHttpClient, localStorageAdapter);
  const authUserUseCase = new AuthUserUseCase(localStorageAdapter, axiosHttpClient);

  return <Login loginUserUseCase={loginUserUseCase} authUserUseCase={authUserUseCase} />;
};

export const SignUpFactory: FunctionComponent = () => {
  const authUserUseCase = new AuthUserUseCase(localStorageAdapter, axiosHttpClient);

  const signupUserUseCase = new SignupUserUseCase(axiosHttpClient);
  const loginUserUseCase = new LoginUserUseCase(axiosHttpClient, localStorageAdapter);

  return (
    <SignUp
      signupUserUseCase={signupUserUseCase}
      authUserUseCase={authUserUseCase}
      loginUserUseCase={loginUserUseCase}
    />
  );
};

export const authUserFactory = function () {
  const authUserUseCase = new AuthUserUseCase(localStorageAdapter, axiosHttpClient);
  return authUserUseCase;
};

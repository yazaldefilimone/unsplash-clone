import { SignupUserUseCase } from '@/data/usecases';
import { LoginUserUseCase } from '@/data/usecases/LoginUserUseCase';
import { LocalStorageAdapter } from '@/infrastructure/cache';
import { AxiosHttpClient } from '@/infrastructure/http';
import { Login } from '@/presentation/pages/login';
import { SignUp } from '@/presentation/pages/signup';
import { FunctionComponent } from 'react';

const axiosHttpClient = new AxiosHttpClient();
const localStorageAdapter = new LocalStorageAdapter();

export const LoginFactory: FunctionComponent = () => {
  const loginUserUseCase = new LoginUserUseCase(axiosHttpClient, localStorageAdapter);
  return <Login loginUserUseCase={loginUserUseCase} />;
};

export const SignUpFactory: FunctionComponent = () => {
  const signupUserUseCase = new SignupUserUseCase(axiosHttpClient);
  return <SignUp signupUserUseCase={signupUserUseCase} />;
};

import { LoginUserUseCase } from '@/data/usecases/LoginUserUseCase';
import { BcryptAdapter, JwtAdapter } from '@/infrastructure/cryptography';
import { UserFirebaseStore } from '@/infrastructure/firebase';
import { Login } from '@/presentation/pages/login';
import { env } from '@/shared/env';
import { FunctionComponent } from 'react';

export const LoginFactory: FunctionComponent = () => {
  const userFirebaseStore = new UserFirebaseStore();
  const bcryptAdapter = new BcryptAdapter(10);
  const jwtAdapter = new JwtAdapter(env.secret.key);
  const loginUserUseCase = new LoginUserUseCase(userFirebaseStore, jwtAdapter, bcryptAdapter);

  return <Login />;
};

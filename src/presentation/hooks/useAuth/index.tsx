import { GetStorage } from '@/data/protocols/cache';
import { IAuthUserUseCase } from '@/domain/usecases/user';
import React from 'react';
import { createContext, ReactNode, useContext, useState, FunctionComponent } from 'react';

type IAuthContext = {
  currentUser?: {
    id: string;
    email: string;
  };
  SetCurrentUser: (user: IAuthComponent) => void;
};

type IAuthComponent = {
  id: string;
  email: string;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

type AuthContextProviderProps = {
  authUserUseCase: IAuthUserUseCase;
  children: ReactNode;
};
export const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = ({
  children,
  authUserUseCase,
}) => {
  const [currentUser, SetCurrentUser] = useState<IAuthComponent>();

  React.useEffect(() => {
    authUserUseCase.perform().then((data) => {
      if (data.isRight()) {
        SetCurrentUser(data.value);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        SetCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = function (): IAuthContext {
  const context = useContext(AuthContext);
  return context;
};

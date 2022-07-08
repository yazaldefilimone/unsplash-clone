import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from '@/shared/styles/global';

import { Home } from '@/presentation/pages/home';
import { User } from '@/presentation/pages/user';
import { SignUpFactory, LoginFactory, authUserFactory } from '@/main/factories/user';
import { AuthContextProvider } from '@/presentation/hooks/useAuth';
import { Footer } from '@/presentation/components/Footer';

export const Routers: FunctionComponent = () => {
  const auth = authUserFactory();
  return (
    <AuthContextProvider authUserUseCase={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/login" element={<LoginFactory />} />
          <Route path="/user/signup" element={<SignUpFactory />} />
        </Routes>
        <GlobalStyles />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

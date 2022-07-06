import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from '@/shared/styles/global';

import { Home } from '@/presentation/pages/home';
import { User } from '@/presentation/pages/user';
import { SignUp } from '@/presentation/pages/signup';
import { LoginFactory } from '../factories/user/LoginFactory';
import { Login } from '@/presentation/pages/login';

export const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from '@/shared/styles/global';

import { Home } from '@/presentation/pages/home';
import { User } from '@/presentation/pages/user';
import { SignUpFactory, LoginFactory } from '../factories/user';

export const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<LoginFactory />} />
        <Route path="/user/signup" element={<SignUpFactory />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/presentation/pages/home';
import { User } from '@/presentation/pages/user';
import { Login } from '@/presentation/pages/login';
import { SignUp } from '@/presentation/pages/signup';
import GlobalStyles from '@/shared/styles/global';

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

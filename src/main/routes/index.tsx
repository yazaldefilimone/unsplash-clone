import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/presentation/pages/home';
import GlobalStyles from '@/shared/styles/global';

export const Routers: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};

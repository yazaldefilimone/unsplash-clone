import { Board } from '@/presentation/components/Board';
import { Header } from '@/presentation/components/Header';
import React, { FunctionComponent } from 'react';

export const Home: FunctionComponent = () => {
  return (
    <article>
      <Header />
      <main>
        <Board />
      </main>
    </article>
  );
};

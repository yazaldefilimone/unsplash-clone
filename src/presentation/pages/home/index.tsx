import { BoardFactory, HeaderFactory } from '@/main/factories/image';

import React, { FunctionComponent } from 'react';

export const Home: FunctionComponent = () => {
  return (
    <article>
      <HeaderFactory />
      <main>
        <BoardFactory />
      </main>
    </article>
  );
};

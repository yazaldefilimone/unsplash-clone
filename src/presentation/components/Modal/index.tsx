import React, { FunctionComponent, ReactNode } from 'react';

import { ModalContainer } from './styles';

type ModalProps = {
  children: ReactNode;
  SetActive: Function;
};

export const Modal: FunctionComponent<ModalProps> = ({ children, SetActive }) => {
  function handlerClose() {
    SetActive((active: boolean) => !active);
  }

  return <ModalContainer onClick={() => handlerClose()}>{children}</ModalContainer>;
};

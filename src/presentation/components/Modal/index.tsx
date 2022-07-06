import React, { FunctionComponent, ReactNode } from 'react';

import { ModalContainer } from './styles';

type ModalProps = {
  children: ReactNode;
  SetActive: Function;
  active: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({ children, SetActive, active }) => {
  function handlerClose() {
    SetActive(!active);
  }

  return (
    <ModalContainer active={active} onClick={() => handlerClose()}>
      {children}
    </ModalContainer>
  );
};

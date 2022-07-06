import { ReactNode } from 'react';

import { ButtonContainer, Spinner } from './styles';

interface ButtonProps {
  children?: ReactNode;
  text: string;
  isDisable?: boolean;
  isRed?: boolean;
  SetActive?: Function;
}

export function Button({ children, text, isDisable, isRed, SetActive }: ButtonProps) {
  function handlerClick() {
    if (SetActive) {
      SetActive((active: boolean) => !active);
    }
  }
  return (
    <ButtonContainer isRed={isRed} isDisable={isDisable} onClick={() => handlerClick()}>
      {children}
      {text}
      <Spinner></Spinner>
    </ButtonContainer>
  );
}

import { ReactNode } from 'react';

import { ButtonContainer, Spinner } from './styles';

interface ButtonProps {
  children?: ReactNode;
  text: string;
  isRed?: boolean;
  SetActive?: Function;
  spinner?: boolean;
}

export function Button({ children, text, isRed, SetActive, spinner }: ButtonProps) {
  function handlerClick() {
    if (SetActive) {
      SetActive((active: boolean) => !active);
    }
  }
  return (
    <ButtonContainer isRed={isRed} disabled={spinner} onClick={() => handlerClick()}>
      {children}
      {text}
      <Spinner active={spinner}></Spinner>
    </ButtonContainer>
  );
}

import { ReactNode } from 'react';

import { ButtonContainer, Spinner } from './styles';

interface ButtonProps {
  children?: ReactNode;
  text: string;
  isDisable?: boolean;
  isRed?: boolean;
}

export function Button({ children, text, isDisable, isRed }: ButtonProps) {
  return (
    <ButtonContainer isRed={isRed} isDisable={isDisable}>
      {children}
      {text}
      <Spinner></Spinner>
    </ButtonContainer>
  );
}

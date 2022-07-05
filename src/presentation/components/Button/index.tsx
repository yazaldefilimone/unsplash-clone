import { ReactNode } from 'react';

import { ButtonContainer, Spinner } from './styles';

interface ButtonProps {
  children?: ReactNode;
  text: string;
  isDisable?: boolean;
}

export function Button({ children, text, isDisable }: ButtonProps) {
  return (
    <ButtonContainer isDisable={isDisable}>
      {children}
      {text}
      <Spinner></Spinner>
    </ButtonContainer>
  );
}

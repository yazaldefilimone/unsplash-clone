import { ReactNode } from 'react';

import { InputContainer } from './styles';

interface InputProps {
  children?: ReactNode;
}

export function Input({ children }: InputProps) {
  return (
    <InputContainer>
      <input type="text" placeholder="enter your email" />
    </InputContainer>
  );
}

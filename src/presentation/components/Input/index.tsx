import { ReactNode } from 'react';

import { InputContainer } from './styles';

interface InputProps {
  name: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
}

export function Input({ name, label, error, type, placeholder, ...rest }: InputProps) {
  return (
    <InputContainer error={error}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type ? type : 'text'} placeholder={placeholder} {...rest} />
      {error && <span>{error}</span>}
    </InputContainer>
  );
}

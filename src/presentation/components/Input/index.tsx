import { ReactNode } from 'react';

import { InputContainer, InputContent } from './styles';

interface InputProps {
  name: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
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
export function InputForm({ name, label, error, type, placeholder, children, ...rest }: InputProps) {
  return (
    <InputContainer error={error}>
      <label htmlFor={name}>{label}</label>
      <InputContent error={error}>
        {children}
        <input id={name} type={type ? type : 'text'} placeholder={placeholder} {...rest} />
      </InputContent>
      {error && <span>{error}</span>}
    </InputContainer>
  );
}

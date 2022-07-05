import { ReactNode } from 'react';

import { InputContainer, InputContent } from './styles';

interface InputProps {
  name: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  disable?: boolean;
  SetValue: Function;
  value: string;
}

export function Input({ name, label, error, type, placeholder, disable, value, SetValue }: InputProps) {
  function handlerChange(value: any) {
    SetValue(value);
  }
  return (
    <InputContainer error={error}>
      <label htmlFor={name}>{label}</label>
      <input
        disabled={disable}
        id={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={handlerChange}
      />
      {error && <span>{error}</span>}
    </InputContainer>
  );
}
export function InputForm({
  name,
  label,
  error,
  type,
  placeholder,
  children,
  disable,
  value,
  SetValue,
}: InputProps) {
  function handlerChange(value: any) {
    SetValue(value);
  }
  return (
    <InputContainer error={error}>
      <label htmlFor={name}>{label}</label>
      <InputContent error={error} disabled={disable}>
        {children}
        <input
          disabled={disable}
          id={name}
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={handlerChange}
        />
      </InputContent>
      {error && <span>{error}</span>}
    </InputContainer>
  );
}

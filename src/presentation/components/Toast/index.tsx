import React, { FunctionComponent } from 'react';

import { ToastContainer, ToastContent, ToastMessage, ToastButton } from './styles';

type ToastProps = {
  value: boolean;
  SetValue: Function;
  status: 'Error' | 'Success';
  message: string;
};
export const Toast: FunctionComponent<ToastProps> = ({ value, SetValue, status, message }) => {
  return (
    <ToastContainer value={value}>
      <ToastContent status={status}>
        <i className={status === 'Error' ? 'ri-spam-2-fill' : 'ri-check-double-line'}></i>
        <ToastMessage>
          <span>{status}</span>
          <p>{message}</p>
        </ToastMessage>
        <ToastButton status={status} onClick={() => SetValue(false)}>
          <i className="ri-close-line"></i>
        </ToastButton>
      </ToastContent>
    </ToastContainer>
  );
};

import React, { FunctionComponent } from 'react';

import { ToastContainer, ToastContent, ToastMessage, ToastButton } from './styles';

type ToastProps = {
  value: boolean;
  SetValue: Function;
  status: 'Error' | 'Success';
  message: string;
};
export type IToastProps = {
  status: 'Error' | 'Success';
  message: string;
};
let timer: any = 0;

export const Toast: FunctionComponent<ToastProps> = ({ value, SetValue, status, message }) => {
  function HandlerCloseToast() {
    SetValue(false);
  }
  if (timer !== 0) {
    clearTimeout(timer);
    timer = setTimeout(HandlerCloseToast, 3500);
  } else {
    timer = setTimeout(HandlerCloseToast, 3500);
  }

  return (
    <ToastContainer value={value}>
      <ToastContent status={status}>
        <i className={status === 'Error' ? 'ri-spam-2-fill' : 'ri-check-double-line'}></i>
        <ToastMessage>
          <span>{status}</span>
          <p>{message}</p>
        </ToastMessage>
        <ToastButton status={status} onClick={() => HandlerCloseToast()}>
          <i className="ri-close-line"></i>
        </ToastButton>
      </ToastContent>
    </ToastContainer>
  );
};

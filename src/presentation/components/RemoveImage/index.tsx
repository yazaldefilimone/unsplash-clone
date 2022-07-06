import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';
import { Button } from '@/presentation/components/Button';
import { InputForm } from '@/presentation/components/Input';

import { RemoveImageHeader } from './styles';

type RemoveImageProps = {
  SetActive: Function;
};

export const RemoveImage: FunctionComponent<RemoveImageProps> = ({ SetActive }) => {
  const [password, SetPassword] = React.useState('');
  function handlerClose() {
    SetActive((active: boolean) => !active);
  }
  return (
    <Form>
      <RemoveImageHeader>
        <h2>Delete Image</h2>

        <button onClick={() => handlerClose()}>
          <i className="ri-close-line"></i>
        </button>
      </RemoveImageHeader>
      <FormContent>
        <InputForm
          value={password}
          SetValue={SetPassword}
          name="password"
          label="Password"
          type="password"
        >
          <i className="ri-lock-line"></i>
        </InputForm>
        <Button isRed={true} text="Delete">
          <i className="ri-delete-bin-7-line"></i>
        </Button>
      </FormContent>
    </Form>
  );
};

import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';
import { Button } from '../Button';
import { Input, InputForm } from '../Input';

import { RemoveImageHeader } from './styles';

export const RemoveImage: FunctionComponent = () => {
  const [password, SetPassword] = React.useState('');
  return (
    <Form>
      <RemoveImageHeader>
        <h2>Delete Image</h2>

        <button>
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

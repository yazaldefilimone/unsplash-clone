import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';
import { Button } from '@/presentation/components/Button';
import { InputForm } from '@/presentation/components/Input';

import { CreateImageHeader } from './styles';
type CreateImageProps = {
  SetActive: Function;
};

export const CreateImage: FunctionComponent<CreateImageProps> = ({ SetActive }) => {
  const [title, SetTitle] = React.useState('');
  const [url, SetUrl] = React.useState('');

  function handlerClose() {
    SetActive((active: boolean) => !active);
  }
  return (
    <Form>
      <CreateImageHeader>
        <h2>Create New Image</h2>

        <button onClick={() => handlerClose()}>
          <i className="ri-close-line"></i>
        </button>
      </CreateImageHeader>
      <FormContent>
        <InputForm value={title} SetValue={SetTitle} name="title" label="Title">
          <i className="ri-price-tag-2-line"></i>
        </InputForm>
        <InputForm value={url} SetValue={SetUrl} name="url" label="Url">
          <i className="ri-link"></i>
        </InputForm>
        <Button text="Create">
          <i className="ri-image-add-line"></i>
        </Button>
      </FormContent>
    </Form>
  );
};

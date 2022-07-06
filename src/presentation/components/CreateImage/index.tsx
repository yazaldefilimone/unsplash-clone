import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';
import { Button } from '../Button';
import { Input, InputForm } from '../Input';

//import { CreateImageContainer } from './styles';

export const CreateImage: FunctionComponent = () => {
  const [title, SetTitle] = React.useState('');
  const [url, SetUrl] = React.useState('');
  return (
    <Form>
      <FormContent>
        <InputForm value={title} SetValue={SetTitle} name="title" label="Title">
          <i className="ri-price-tag-2-line"></i>
        </InputForm>
        <InputForm value={url} SetValue={SetUrl} name="url" label="Url">
          <i className="ri-price-tag-2-line"></i>
        </InputForm>
        <Button text="Create">
          <i className="ri-image-add-line"></i>
        </Button>
      </FormContent>
    </Form>
  );
};

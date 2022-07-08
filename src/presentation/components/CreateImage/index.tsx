import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent, useState } from 'react';
import { Button } from '@/presentation/components/Button';
import { InputForm } from '@/presentation/components/Input';

import { CreateImageHeader } from './styles';
import { ICreateImageUseCase } from '@/domain/usecases/image';
import { useNavigate } from 'react-router-dom';
import { IToastProps } from '@/presentation/components/Toast';
type CreateImageProps = {
  SetActive: Function;
  createImageUseCase: ICreateImageUseCase;
};

export const CreateImage: FunctionComponent<CreateImageProps> = ({ SetActive, createImageUseCase }) => {
  const [label, SetLabel] = React.useState('');
  const [url, SetUrl] = React.useState('');
  const [toast, SetToast] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [errorOrSuccess, SetErrorOrSuccess] = useState<IToastProps>({} as IToastProps);
  const navigate = useNavigate();

  function handlerClose() {
    SetActive((active: boolean) => !active);
  }

  async function handlerSubmit() {
    try {
      SetLoading(true);
      const result = await createImageUseCase.perform({ url, label });
      console.log(result);
      SetLoading(false);
      if (result.isLeft()) {
        SetErrorOrSuccess({
          message: result.value.message,
          status: 'Error',
        });

        SetToast(true);
        return 0;
      }

      SetErrorOrSuccess({
        message: 'create Image successfully',
        status: 'Success',
      });
      SetToast(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (error: any) {
      SetLoading(false);
      SetErrorOrSuccess({
        message: error.message,
        status: 'Error',
      });
    } finally {
      SetLoading(false);
    }
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
        <InputForm value={label} SetValue={SetLabel} name="label" label="Label">
          <i className="ri-price-tag-2-line"></i>
        </InputForm>
        <InputForm value={url} SetValue={SetUrl} name="url" label="Url">
          <i className="ri-link"></i>
        </InputForm>
        <Button text="Create" spinner={loading} SetActive={handlerSubmit}>
          <i className="ri-image-add-line"></i>
        </Button>
      </FormContent>
    </Form>
  );
};

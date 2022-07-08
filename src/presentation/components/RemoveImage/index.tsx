import { Form, FormContent } from '@/shared/styles/Form';
import React, { FunctionComponent } from 'react';
import { Button } from '@/presentation/components/Button';
import { InputForm } from '@/presentation/components/Input';

import { RemoveImageHeader } from './styles';
import { IDeleteImageUseCase } from '@/domain/usecases/image';
import { useNavigate } from 'react-router-dom';
import { IToastProps, Toast } from '@/presentation/components/Toast';
import { useAuth } from '@/presentation/hooks/useAuth';

type RemoveImageProps = {
  SetActive: Function;
  deleteImageUseCase: IDeleteImageUseCase;
};

export const RemoveImage: FunctionComponent<RemoveImageProps> = ({ SetActive, deleteImageUseCase }) => {
  const [password, SetPassword] = React.useState('');
  const [toast, SetToast] = React.useState(false);
  const [loading, SetLoading] = React.useState(false);
  const [errorOrSuccess, SetErrorOrSuccess] = React.useState<IToastProps>({} as IToastProps);
  const { currentUser } = useAuth();
  function handlerClose() {
    SetActive((active: boolean) => !active);
  }

  async function handlerDelete() {
    try {
      SetLoading(true);
      const result = await deleteImageUseCase.perform({ id: '', password });
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
        message: 'delete Image successfully',
        status: 'Success',
      });
      SetToast(true);
      handlerClose();
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
    <>
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
          <Button isRed={true} text="Delete" SetActive={handlerDelete} spinner={loading}>
            <i className="ri-delete-bin-7-line"></i>
          </Button>
        </FormContent>
      </Form>
      <Toast value={toast} SetValue={SetToast} {...errorOrSuccess} />
    </>
  );
};

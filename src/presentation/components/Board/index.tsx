import React, { FunctionComponent, useState } from 'react';

import { BoardContainer, Loading, Spinner } from './styles';
import { Image } from '@/presentation/components/Image';
import { Modal } from '@/presentation/components/Modal';
import { RemoveImage } from '@/presentation/components/RemoveImage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/presentation/hooks/useAuth';
import { IDeleteImageUseCase, IGetAllImageUseCase } from '@/domain/usecases/image';
import { Image as Images } from '@/domain/entities';
import { IToastProps, Toast } from '@/presentation/components/Toast';

type BoardTypes = {
  deleteImageUseCase: IDeleteImageUseCase;
  getAllImageUseCase: IGetAllImageUseCase;
};

export const Board: FunctionComponent<BoardTypes> = ({ deleteImageUseCase, getAllImageUseCase }) => {
  const [modalDelete, SetModalDelete] = React.useState(true);
  const [id, SetId] = React.useState('');
  const [images, SetImages] = React.useState<any[]>();
  const [toast, SetToast] = React.useState(false);
  const [loading, SetLoading] = React.useState(false);
  const [errorOrSuccess, SetErrorOrSuccess] = React.useState<IToastProps>({} as IToastProps);

  const { currentUser } = useAuth();
  const navegante = useNavigate();
  function deleteImage(id?: string, act?: boolean) {
    SetId(id as any);
    SetModalDelete(act as any);
  }
  React.useEffect(() => {
    if (modalDelete === false) {
      if (!currentUser) {
        navegante('/user/login');
        return;
      }
    }
  }, [modalDelete]);

  async function handlerImage() {
    SetLoading(true);
    const images = await getAllImageUseCase.perform();
    SetLoading(false);

    if (images.isLeft()) {
      SetErrorOrSuccess({
        status: 'Error',
        message: images.value.message,
      });
    }

    console.log(images);
    if (images.isRight()) {
      SetImages(images.value);
    }
  }

  React.useEffect(() => {
    handlerImage().then((a) => a);
  }, []);

  const desc =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui molestias cum, nihil natus omnis sequi tenetur dolores doloribus quia quo delectus maxime soluta nobis sunt officia illum possimus numquam.';

  const projects = {
    username: 'Yazalde Filimone',
    desc,
    src: 'https://source.unsplash.com/random/',
  };

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  console.log(images);
  const count: number = Number(images?.length && +images?.length / 3);
  return (
    <div>
      {loading ? (
        <Loading>
          <Spinner></Spinner>
        </Loading>
      ) : (
        <>
          <BoardContainer>
            <div>
              {images?.map(
                (obj, index) =>
                  index < count && (
                    <Image
                      id={obj._id}
                      key={index}
                      SetActive={deleteImage}
                      src={obj.url}
                      description={obj.label}
                      userName={obj.label}
                    />
                  ),
              )}
            </div>
            <div>
              {images?.map(
                (obj, index) =>
                  index > count &&
                  index < count * 2 && (
                    <Image
                      id={obj._id}
                      key={index}
                      SetActive={deleteImage}
                      src={obj.url}
                      description={obj.label}
                      userName={obj.label}
                    />
                  ),
              )}
            </div>
            <div>
              {images?.map(
                (obj, index) =>
                  index > count * 2 && (
                    <Image
                      id={obj._id}
                      key={index}
                      SetActive={deleteImage}
                      src={obj.url}
                      description={obj.label}
                      userName={obj.label}
                    />
                  ),
              )}
            </div>
          </BoardContainer>

          <Modal active={modalDelete} SetActive={SetModalDelete}>
            <RemoveImage deleteImageUseCase={deleteImageUseCase} id={id} SetActive={SetModalDelete} />
          </Modal>
        </>
      )}
      <Toast value={toast} SetValue={SetToast} {...errorOrSuccess} />
    </div>
  );
};

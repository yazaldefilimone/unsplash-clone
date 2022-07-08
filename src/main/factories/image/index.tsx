import {
  CreateImageUseCase,
  DeleteImageUseCase,
  GetAllImageUseCase,
  GetNameImageUseCase,
} from '@/data/usecases/image';
import { AxiosHttpClient } from '@/infrastructure/http';
import { Board } from '@/presentation/components/Board';
import { Header } from '@/presentation/components/Header';
import React, { FunctionComponent } from 'react';

const axiosHttpClient = new AxiosHttpClient();

export const HeaderFactory: FunctionComponent = () => {
  const createImageUseCase = new CreateImageUseCase(axiosHttpClient);
  const getNameImageUseCase = new GetNameImageUseCase(axiosHttpClient);
  return <Header createImageUseCase={createImageUseCase} getNameImageUseCase={getNameImageUseCase} />;
};

export const BoardFactory: FunctionComponent = () => {
  const deleteImageUseCase = new DeleteImageUseCase(axiosHttpClient);
  const getAllImageUseCase = new GetAllImageUseCase(axiosHttpClient);
  return <Board deleteImageUseCase={deleteImageUseCase} getAllImageUseCase={getAllImageUseCase} />;
};

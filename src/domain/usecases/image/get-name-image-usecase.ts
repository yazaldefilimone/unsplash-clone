import { Image } from '@/domain/entities';
import { InvalidParamError, UnexpectedError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface IGetNameImageUseCase {
  perform: (data: IGetNameImageUseCase.Input) => IGetNameImageUseCase.Output;
}

export namespace IGetNameImageUseCase {
  export type Input = { name: string };
  export type Output = Promise<Either<UnexpectedError | InvalidParamError, Image[]>>;
}

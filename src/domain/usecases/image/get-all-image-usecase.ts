import { Image } from '@/domain/entities';
import { InvalidParamError, UnexpectedError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface IGetAllImageUseCase {
  perform: (data: IGetAllImageUseCase.Input) => IGetAllImageUseCase.Output;
}

export namespace IGetAllImageUseCase {
  export type Input = Image;
  export type Output = Promise<Either<UnexpectedError | InvalidParamError, Image[]>>;
}

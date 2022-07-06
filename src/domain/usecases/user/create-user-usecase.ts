import { User } from '@/domain/entities';
import { EmailInUseError, InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface ICreateUserUseCase {
  perform: (data: ICreateUserUseCase.Input) => ICreateUserUseCase.Output;
}

export namespace ICreateUserUseCase {
  export type Input = Omit<User, 'id'>;
  export type Output = Promise<
    Either<UnexpectedError | InvalidCredentialsError | EmailInUseError, { id: string }>
  >;
}

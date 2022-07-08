import { Either } from '@/shared/error-handler/either';

export interface IAuthUserUseCase {
  perform: () => IAuthUserUseCase.Output;
}

export namespace IAuthUserUseCase {
  export type Output = Promise<Either<any, { email: string; id: string }>>;
}

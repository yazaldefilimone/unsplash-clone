import { ISignupUserUseCase } from '@/domain/usecases/user';
import { IUserFirebaseStore } from '@/data/protocols/firebase';

import { left, right } from '@/shared/error-handler/either';
import { EmailInUseError, UnexpectedError } from '@/domain/errors';

export class SignupUserUseCase implements ISignupUserUseCase {
  private readonly userFirebaseStore: IUserFirebaseStore;
  constructor(userFirebaseStore: IUserFirebaseStore) {
    this.userFirebaseStore = userFirebaseStore;
  }

  async perform(data: ISignupUserUseCase.Input): ISignupUserUseCase.Output {
    try {
      const isExists = await this.userFirebaseStore.get(data.email);
      if (isExists) {
        return left(new EmailInUseError());
      }

      const user = await this.userFirebaseStore.create(data);

      return right(user);
    } catch (error) {
      return left(new UnexpectedError());
    }
  }
}

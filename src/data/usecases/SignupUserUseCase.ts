import { ISignupUserUseCase } from '@/domain/usecases/user';
import { IUserFirebaseStore } from '@/data/protocols/firebase';

import { left, right } from '@/shared/error-handler/either';
import { EmailInUseError, UnexpectedError } from '@/domain/errors';
import { Hasher } from '@/data/protocols/cryptography';

export class SignupUserUseCase implements ISignupUserUseCase {
  private readonly userFirebaseStore: IUserFirebaseStore;
  private readonly hasher: Hasher;

  constructor(userFirebaseStore: IUserFirebaseStore, hasher: Hasher) {
    this.userFirebaseStore = userFirebaseStore;
    this.hasher = hasher;
  }

  async perform(data: ISignupUserUseCase.Input): ISignupUserUseCase.Output {
    try {
      const isExists = await this.userFirebaseStore.getByEmail(data.email);
      if (isExists) {
        return left(new EmailInUseError());
      }
      data.password = await this.hasher.hash(data.password);

      const userId = await this.userFirebaseStore.create(data);

      return right(userId);
    } catch (error) {
      return left(new UnexpectedError());
    }
  }
}

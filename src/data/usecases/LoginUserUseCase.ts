import { ILoginUserUseCase } from '@/domain/usecases/user';
import { left, right } from '@/shared/error-handler/either';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { SetStorage } from '@/data/protocols/cache';
import { endpoints } from '@/shared/utils';
import { UnexpectedError } from '@/domain/errors';
import { env } from '@/shared/env';

export class LoginUserUseCase implements ILoginUserUseCase {
  private readonly httpClient: HttpClient;
  private readonly setStorage: SetStorage;
  constructor(httpClient: HttpClient, setStorage: SetStorage) {
    this.httpClient = httpClient;
    this.setStorage = setStorage;
  }

  async perform(data: ILoginUserUseCase.Input): ILoginUserUseCase.Output {
    try {
      const request = {
        ...endpoints.user.login,
        body: data,
      };
      const response = await this.httpClient.request(request);

      switch (response.statusCode) {
        case HttpStatusCode.badRequest:
          return left(response.body);
          break;
        case HttpStatusCode.ok:
          this.setStorage.set(env.storage.token, { token: response.body.token });
          return right(response.body);
          break;
        case HttpStatusCode.create:
          return right(response.body);
          break;

        default:
          return left(new UnexpectedError());
          break;
      }
    } catch (error) {
      return left(new UnexpectedError());
    }
  }
}

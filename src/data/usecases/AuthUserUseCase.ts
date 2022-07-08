import { IAuthUserUseCase } from '@/domain/usecases/user';
import { Either, left, right } from '@/shared/error-handler/either';
import { GetStorage } from '@/data/protocols/cache';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { endpoints } from '@/shared/utils';
import { UnexpectedError } from '@/domain/errors';
import { env } from '@/shared/env';

export class AuthUserUseCase implements IAuthUserUseCase {
  private readonly getStorage: GetStorage;
  private readonly httpClient: HttpClient;
  constructor(getStorage: GetStorage, httpClient: HttpClient) {
    this.getStorage = getStorage;
    this.httpClient = httpClient;
  }
  async perform(): IAuthUserUseCase.Output {
    try {
      const cache = await this.getStorage.get(env.storage.token);
      if (!cache) {
        return left(new Error('not found token'));
      }
      console.log({ cache });
      const authEndpoints = {
        ...endpoints.user.auth,
        body: { accessToken: cache.token },
      };
      const response = await this.httpClient.request(authEndpoints);

      switch (response.statusCode) {
        case HttpStatusCode.badRequest:
          return left(response.body);
          break;
        case HttpStatusCode.ok:
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

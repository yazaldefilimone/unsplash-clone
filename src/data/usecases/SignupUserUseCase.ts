import { ISignupUserUseCase } from '@/domain/usecases/user';
import { left, right } from '@/shared/error-handler/either';
import { endpoints } from '@/shared/utils';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';

export class SignupUserUseCase implements ISignupUserUseCase {
  private readonly httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async perform(data: ISignupUserUseCase.Input): ISignupUserUseCase.Output {
    try {
      const request = {
        ...endpoints.user.signup,
        body: data,
      };
      const response = await this.httpClient.request(request);

      switch (response.statusCode) {
        case HttpStatusCode.badRequest:
          return left(response.body);
          break;
        case HttpStatusCode.ok:
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

import { left, right } from '@/shared/error-handler/either';
import { endpoints } from '@/shared/utils';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';
import { IDeleteImageUseCase } from '@/domain/usecases/image';

export class DeleteImageUseCase implements IDeleteImageUseCase {
  private readonly httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async perform(data: IDeleteImageUseCase.Input): IDeleteImageUseCase.Output {
    try {
      const request = {
        ...endpoints.image.delete,
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
        case HttpStatusCode.unauthorized:
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

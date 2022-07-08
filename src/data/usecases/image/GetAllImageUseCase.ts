import { left, right } from '@/shared/error-handler/either';
import { endpoints } from '@/shared/utils';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { UnexpectedError } from '@/domain/errors';
import { IGetAllImageUseCase } from '@/domain/usecases/image';

export class GetAllImageUseCase implements IGetAllImageUseCase {
  private readonly httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async perform(): IGetAllImageUseCase.Output {
    try {
      const request = {
        ...endpoints.image.create,
        body: null,
      };
      const response = await this.httpClient.request(request);

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

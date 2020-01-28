import { HttpException } from "data/exceptions/HttpException";

export class UnauthorizedException extends HttpException {
  static fromError = (error: any) => {
    return new UnauthorizedException({
      statusCode: error.response.status,
      response: error.response.data,
      message: error.message
    });
  };
}

import { BaseException } from "data/exceptions/BaseException";
import { HttpExceptionProps } from "data/exceptions/types/ExceptionTypes";
import HttpStatusCode from "data/definitions/HttpStatusCode";

export class HttpException extends BaseException {
  statusCode: HttpStatusCode;
  response: any;

  constructor(props: HttpExceptionProps) {
    super(props);
    this.statusCode = props.statusCode || 0;
    this.response = props.response;
  }

  static fromError = (error: any) => {
    return new HttpException({
      statusCode: error.response.status,
      response: error.response.data,
      message: error.message
    });
  };
}

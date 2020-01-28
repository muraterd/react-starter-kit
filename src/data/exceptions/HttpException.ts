import { BaseException } from "data/exceptions/BaseException";
import { HttpExceptionProps } from "data/exceptions/types/ExceptionTypes";
import HttpStatusCode from "data/definitions/HttpStatusCode";

export class HttpException extends BaseException {
  statusCode: HttpStatusCode;

  constructor(props: HttpExceptionProps) {
    super(props);
    this.statusCode = props.statusCode || 0;
  }

  static fromError = (error: any) => {
    return new HttpException({
      statusCode: error.response.status,
      message: error.message
    });
  };
}

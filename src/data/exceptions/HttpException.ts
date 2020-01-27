import { BaseException } from "data/exceptions/BaseException";
import { HttpExceptionProps } from "data/exceptions/types/ExceptionTypes";

export class HttpException extends BaseException {
  statusCode: number;

  constructor(props: HttpExceptionProps) {
    super(props);
    this.statusCode = props.statusCode || 0;
  }
}

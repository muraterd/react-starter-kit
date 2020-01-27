import { BaseExceptionProps } from "data/exceptions/types/ExceptionTypes";

export class BaseException extends Error {
  innerException?: BaseExceptionProps;

  constructor(props: BaseExceptionProps) {
    super(props.message);
    this.innerException = props.innerException;
  }
}

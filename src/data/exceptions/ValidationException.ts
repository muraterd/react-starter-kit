import { HttpException } from "data/exceptions/HttpException";
import { ValidationExceptionProps } from "data/exceptions/types/ExceptionTypes";

export class ValidationException extends HttpException {
  validationErrors: object;

  constructor(props: ValidationExceptionProps) {
    super(props);
    this.validationErrors = props.validationErrors;
  }

  private static convertServerErrors = (serverErrors: { field: string; message: string }[]) => {
    const errors = {};

    serverErrors.forEach(item => {
      errors[item.field.toCamelCase()] = item.message;
    });

    return errors;
  };

  static fromError = (error: any) => {
    return new ValidationException({
      validationErrors: ValidationException.convertServerErrors(error.response.data.errors),
      statusCode: error.response.status,
      message: error.message
    });
  };
}

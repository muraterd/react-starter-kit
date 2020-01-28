import HttpStatusCode from "data/definitions/HttpStatusCode";

export interface BaseExceptionProps {
  message?: string;
  innerException?: BaseExceptionProps;
}

export interface HttpExceptionProps extends BaseExceptionProps {
  statusCode: HttpStatusCode;
}

export interface ValidationExceptionProps extends HttpExceptionProps {
  validationErrors: object;
}

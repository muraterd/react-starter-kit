export interface BaseExceptionProps {
  message?: string;
  innerException?: BaseExceptionProps;
}

export interface HttpExceptionProps extends BaseExceptionProps {
  statusCode: number;
}

export interface ValidationExceptionProps extends HttpExceptionProps {
  validationErrors: object;
}

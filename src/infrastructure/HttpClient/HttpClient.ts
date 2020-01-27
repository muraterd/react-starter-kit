import axios from "axios";
import { ValidationException } from "data/exceptions/ValidationException";

const HttpClient = axios.create({
  baseURL: "http://192.168.2.23:5000/",
  timeout: 20000,
  headers: { "Content-Type": "application/json" }
});

// HttpClient.defaults.headers.post["Content-Type"];

// Global error handler
HttpClient.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      throw error;
    }

    if (error.response.status === 422) {
      // throw new ValidationException({ statusCode: error.response.status, message: "Süper!", innerException: error });
      throw ValidationException.fromError(error);
    }
    // const httpError = new HttpException(error);

    // if (httpError.statusCode == 401) {
    //   EventBus.emit("401");
    // } else if (httpError.statusCode == 422) {
    //   EventBus.emit("VALIDATION_ERROR", {
    //     title: "Bir hata oluştu",
    //     message: httpError.data.error.details[0].msg
    //   });
    // }

    // throw httpError;
  }
);

export default HttpClient;

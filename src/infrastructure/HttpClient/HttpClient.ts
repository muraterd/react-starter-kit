import axios from "axios";
import { ValidationException } from "data/exceptions/ValidationException";
import HttpStatusCode from "data/definitions/HttpStatusCode";
import RouteManager from "infrastructure/Managers/RouteManager";
import { HttpException } from "data/exceptions/HttpException";

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
    if (!error.response && !error.response.status) {
      throw error;
    }

    switch (error.response.status) {
      case HttpStatusCode.UNPROCESSABLE_ENTITY:
        throw ValidationException.fromError(error);
      case HttpStatusCode.UNAUTHORIZED:
        if (!RouteManager.redirectIfNeeded("/login")) {
          throw HttpException.fromError(error);
        }
        break;
      case HttpStatusCode.FORBIDDEN:
        alert("Unhandled forbidden state");
        break;
      default:
        throw HttpException.fromError(error);
    }
  }
);

export default HttpClient;

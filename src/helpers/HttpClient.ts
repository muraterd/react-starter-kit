import axios from "axios";

const HttpClient = axios.create({
  baseURL: "http://mubme.me/",
  timeout: 20000,
  headers: { "Content-Type": "application/json" }
});

// HttpClient.defaults.headers.post["Content-Type"];

// Global error handler
// HttpClient.interceptors.response.use(
//   response => response,
//   error => {
//     const httpError = new HttpException(error);

//     if (httpError.statusCode == 401) {
//       EventBus.emit("401");
//     } else if (httpError.statusCode == 422) {
//       EventBus.emit("VALIDATION_ERROR", {
//         title: "Bir hata oluştu",
//         message: httpError.data.error.details[0].msg
//       });
//     }

//     throw httpError;
//   }
// );

export default HttpClient;

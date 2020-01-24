import moment from "moment";
import jwt from "jsonwebtoken";
import HttpClient from "infrastructure/HttpClient/HttpClient";

const TOKEN_EXPIRE_DATE_KEY = "TOKEN_EXPIRE_DATE";
const TOKEN_KEY = "JWT_TOKEN";

export class AuthService {
  public static setTokenExpireDate(timestamp: number): void {
    localStorage.setItem(TOKEN_EXPIRE_DATE_KEY, timestamp.toString());
  }

  public static getTokenExpireDate(): number {
    try {
      const authTokenString = this.getAuthToken();
      const authToken: any = jwt.decode(authTokenString);
      return authToken.exp;
    } catch (error) {
      return 0;
    }
  }

  public static removeTokenExpireDate(): void {
    localStorage.removeItem(TOKEN_EXPIRE_DATE_KEY);
  }

  public static isLoggedIn(): boolean {
    let isLoggedIn = false;
    try {
      const expireDate = this.getTokenExpireDate();
      const now = moment().unix();
      isLoggedIn = expireDate > now;
    } finally {
    }

    if (!isLoggedIn) {
      this.logout();
    }

    return isLoggedIn;
  }

  public static setAuthToken(token: string): void {
    if (!token) {
      throw new Error("Token can not be empty");
    }

    HttpClient.defaults.headers["x-access-token"] = token;

    localStorage.setItem(TOKEN_KEY, token);
  }

  public static getAuthToken(): string {
    return localStorage.getItem(TOKEN_KEY) || "";
  }

  public static removeAuthToken(): void {
    HttpClient.defaults.headers["x-access-token"] = "";
    localStorage.removeItem(TOKEN_KEY);
  }

  public static getCurrentUser() {
    const token = this.getAuthToken();

    if (!token) {
      return null;
    }

    return jwt.decode(token);
  }

  public static logout() {
    this.removeTokenExpireDate();
    this.removeAuthToken();
  }
}

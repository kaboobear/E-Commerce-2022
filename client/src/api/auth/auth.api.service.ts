import { ApiBaseService } from "api/apibase.service";
import { AxiosPromise } from "axios";
import { UserData } from "features/auth/auth.types";
import {
  LoginBody,
  RegisterBody,
  ResetPasswordBody,
  ResetPasswordRequestBody,
} from "./types";

class AuthApiService extends ApiBaseService {
  init(): AxiosPromise<UserData> {
    return this.apibase.get("/user/init", { withCredentials: true });
  }

  login(body: LoginBody): AxiosPromise<UserData> {
    return this.apibase.post("/auth/login", body);
  }

  resetPassword(body: ResetPasswordBody): AxiosPromise {
    return this.apibase.post("/auth/reset-password", body);
  }

  resetPasswordRequest(body: ResetPasswordRequestBody): AxiosPromise {
    return this.apibase.post("/auth/reset-password-request", body);
  }

  register(body: RegisterBody): AxiosPromise<UserData> {
    return this.apibase.post("/user", body);
  }

  logout(): AxiosPromise {
    return this.apibase.post("/auth/logout");
  }
}

const authApiService = new AuthApiService();
export { authApiService };

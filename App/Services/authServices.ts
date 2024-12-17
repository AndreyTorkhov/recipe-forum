import { api } from "./axiosConfig";
import { BodyLoginRequest, BodyRegisterRequest } from "../Types/api";

export class AuthServices {
  static login({ email, password }: BodyLoginRequest) {
    return api.post("/auth/login", { email, password });
  }

  static register({ name, email, password }: BodyRegisterRequest) {
    return api.post("/auth/login", { name, email, password });
  }
}

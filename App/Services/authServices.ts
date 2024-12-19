import { api } from "../Api/axiosConfig";
import { BodyLoginRequest, BodyRegisterRequest } from "../Types/api";
import { setAccessToken } from "./tokenService";

export class AuthServices {
  static async login({ email, password }: BodyLoginRequest) {
    const response = await api.post("/auth/login", { email, password });
    const { accessToken } = response.data;
    await setAccessToken(accessToken);
    return response;
  }

  static async register({ name, email, password }: BodyRegisterRequest) {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    const { accessToken } = response.data;
    await setAccessToken(accessToken);
    return response;
  }
}

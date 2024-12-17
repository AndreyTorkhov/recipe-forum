import { $api } from "./axios";
import { setAccessToken, setRefreshToken } from "../Services/tokenService";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await $api.post("/auth/login", {
      email,
      password,
    });
    await setAccessToken(data.accessToken);

    // await setRefreshToken(data.refreshToken);

    return data;
  } catch (error) {
    console.error("Ошибка при авторизации", error);
    throw error;
  }
};

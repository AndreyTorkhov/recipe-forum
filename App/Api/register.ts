import { $api } from "./axios";
import { setAccessToken, setRefreshToken } from "../Services/tokenService";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const { data } = await $api.post("/auth/register", {
      name,
      email,
      password,
    });

    await setAccessToken(data.accessToken);

    // await setRefreshToken(data.refreshToken);

    return data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    throw error;
  }
};

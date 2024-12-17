import axios from "axios";
import { getRefreshToken, setAccessToken } from "../Services/tokenService";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      throw new Error("Refresh token not available");
    }
    const { data } = await axios.post(
      "https://deeply-witty-honeybee.ngrok-free.app/auth/refresh",
      { token: refreshToken }
    );
    await setAccessToken(data.accessToken);
    console.log("Access token refreshed:", data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    throw error;
  }
};

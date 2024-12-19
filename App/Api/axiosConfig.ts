import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { ScreenNavigationProp } from "../Types/navigation";
import { setAccessToken, removeAccessToken } from "../Services/tokenService";

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({
  baseURL: `https://clever-man-maximum.ngrok-free.app`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const refresh = async () => {
  try {
    const response = await api.post("/auth/refresh");
    const { accessToken } = response.data;
    await setAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    throw error;
  }
};

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refresh();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api.request(originalRequest);
      } catch (refreshError) {
        console.error("Не удалось обновить токен:", refreshError);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export const setNavigationInterceptor = (
  navigation: ScreenNavigationProp<"Login">
) => {
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError<unknown, { _isRetry: boolean }>) => {
      const originalRequest = error.config;

      if (originalRequest?.url?.includes("refresh")) {
        await removeAccessToken();
        navigation.navigate("Start");
        return Promise.reject(error);
      }

      // if (
      //   error.response?.status === 401 &&
      //   originalRequest &&
      //   !originalRequest.headers._isRetry
      // ) {
      //   originalRequest.headers._isRetry = true;
      //   try {
      //     const newAccessToken = await refresh();
      //     originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //     return api.request(originalRequest);
      //   } catch (refreshError) {
      //     await removeAccessToken();
      //     navigation.navigate("Start");
      //   }
      // }

      return Promise.reject(error);
    }
  );
};

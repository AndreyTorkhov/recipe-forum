import axios from "axios";
import {
  getAccessToken,
  //   getRefreshToken,
  //   setAccessToken,
} from "../Services/tokenService";
import { refreshAccessToken } from "./refresh";

export const $api = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  responseType: "json",
});

// $api.interceptors.request.use(async (config) => {
//   const token = await getAccessToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// $api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const newAccessToken = await refreshAccessToken();

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return $api(originalRequest);
//       } catch (refreshError) {
//         console.error("Ошибка при обновлении токена:", refreshError);
//         throw refreshError;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: `http://localhost:3000/`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let refreshPromise: Promise<any> | null = null;

const refresh = () => {
  return api.post("/auth/refresh");
};

export async function refreshWithoutRepeats() {
  const localCopy = refreshPromise;
  let response: AxiosResponse;

  if (localCopy && refreshPromise) {
    response = await refreshPromise;
  } else {
    refreshPromise = refresh();
    const copy = refreshPromise;
    response = await copy;
    refreshPromise = null;
  }

  return response;
}

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<unknown, { _isRetry: boolean }>) => {
    const originalRequest = error.config;

    if (error.config?.url?.includes("refresh")) {
      window.location.replace("/login");
    }

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest.headers._isRetry
    ) {
      originalRequest.headers._isRetry = true;
      try {
        await refreshWithoutRepeats();

        return await api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    return Promise.reject(error);
  }
);

import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const setAccessToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("accessToken", token);
    console.log("Access token saved:", token);
  } catch (error) {
    console.error("Ошибка при сохранении токена", error);
  }
};

export const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    console.log("Retrieved token:", token);
    return token;
  } catch (error) {
    console.error("Ошибка при получении токена", error);
  }
};

export const removeAccessToken = async () => {
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = async (token: string) => {
  await AsyncStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const getRefreshToken = async () => {
  return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
};

export const removeRefreshToken = async () => {
  await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
};

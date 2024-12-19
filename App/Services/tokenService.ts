import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN_KEY = "accessToken";

export const setAccessToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch (error) {
    console.error("Ошибка при сохранении токена:", error);
  }
};

export const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    return token;
  } catch (error) {
    console.error("Ошибка при получении токена:", error);
    return null;
  }
};

export const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch (error) {
    console.error("Ошибка при удалении токена:", error);
  }
};

// export const setRefreshToken = async (token: string) => {
//   await AsyncStorage.setItem(REFRESH_TOKEN_KEY, token);
// };

// export const getRefreshToken = async () => {
//   return await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
// };

// export const removeRefreshToken = async () => {
//   await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
// };

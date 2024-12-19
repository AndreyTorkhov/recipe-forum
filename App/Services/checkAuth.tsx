import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PropsWithChildren } from "../Types/propsWithChildren";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../Types/navigation";

interface CheckAuthProps {}

export const CheckAuth = ({ children }: PropsWithChildren<CheckAuthProps>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation: ScreenNavigationProp<"Home"> = useNavigation();

  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        setIsLoggedIn(!!accessToken);
      } catch (error) {
        console.error("Ошибка при проверке токена", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkIfUserIsLoggedIn();
  }, []);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigation.navigate("Start");
    }
  }, [isLoading, isLoggedIn, navigation]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <>{children}</>;
};

import { useEffect, useState } from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Routes, Route } from "./AppRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const [initialRoute, setInitialRoute] = useState<Route | null>(null);

  useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("accessToken");

        if (accessToken) {
          setInitialRoute(Route.HomeScreen);
        } else {
          setInitialRoute(Route.StartScreen);
        }
      } catch (error) {
        console.error("Ошибка при проверке токена", error);
        setInitialRoute(Route.StartScreen);
      }
    };

    checkIfUserIsLoggedIn();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      {Routes.map((route) => {
        const options = route.navigationOptions;
        return (
          <Stack.Screen
            name={route.name}
            component={route.screen}
            key={route.name}
            options={options as NativeStackNavigationOptions}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export { RootStack };

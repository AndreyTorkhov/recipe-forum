import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes, Route } from "./AppRoutes";
import Home from "../Screens/Home";
import { CheckAuth } from "../Services/checkAuth";

const Stack = createNativeStackNavigator();

const HomeWrapper = () => (
  <CheckAuth>
    <Home />
  </CheckAuth>
);

const RootStack = () => {
  return (
    <Stack.Navigator>
      {Routes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.screen === Home ? HomeWrapper : route.screen}
          options={route.navigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

export { RootStack };

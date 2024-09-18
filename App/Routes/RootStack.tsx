import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./AppRoutes";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      {Routes.map((route) => {
        return (
          <Stack.Screen
            name={route.name}
            component={route.screen}
            key={route.name}
            options={route.navigationOptions}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export { RootStack };

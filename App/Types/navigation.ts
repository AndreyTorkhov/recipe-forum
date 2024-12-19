import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Start: undefined;
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  Dish: { id: number };
  Camera: undefined;
  CreateRecipe: undefined;
};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

import Home from "../Screens/Home/Home";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Greetings from "../Screens/Greetings";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Profile from "../Screens/Profile";
import Dish from "../Screens/Dish";
import Camera from "../Screens/Camera";
import CreateRecipe from "../Screens/CreateRecipe";
import { AppTab } from "./AppTab";
import { RootStackParamList } from "../Types/navigation";

interface RouteConfig {
  name: keyof RootStackParamList;
  screen: React.ComponentType<any>;
  navigationOptions?: NativeStackNavigationOptions;
}

enum Route {
  StartScreen = "Start",
  HomeScreen = "Home",
  LoginScreen = "Login",
  SignUpScreen = "SignUp",
  ProfileScreen = "Profile",
  DishScreen = "Dish",
  CameraScreen = "Camera",
  CreateRecipeScreen = "CreateRecipe",
}

const Routes: RouteConfig[] = [
  {
    name: Route.StartScreen,
    screen: Greetings,
    navigationOptions: {
      headerShown: false,
    },
  },
  // {
  //   name: Route.HomeScreen,
  //   screen: Home,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  {
    name: Route.LoginScreen,
    screen: Login,
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
      headerShadowVisible: false,
    },
  },
  {
    name: Route.SignUpScreen,
    screen: SignUp,
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
      headerShadowVisible: false,
    },
  },
  {
    name: Route.ProfileScreen,
    screen: Profile,
  },
  {
    name: Route.HomeScreen,
    screen: AppTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.DishScreen,
    screen: Dish,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.CameraScreen,
    screen: Camera,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.CreateRecipeScreen,
    screen: CreateRecipe,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export { Routes, Route };

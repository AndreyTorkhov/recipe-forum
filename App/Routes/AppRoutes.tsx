import Home from "../Screens/Home/Home";
import Greetings from "../Screens/Greetings";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Profile from "../Screens/Profile";
import { AppTab } from "./AppTab";

enum Route {
  StartScreen = "Start",
  HomeScreen = "Home",
  LoginScreen = "Login",
  SignUpScreen = "SignUp",
  ProfileScreen = "Profile",
}

const Routes = [
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
];

export { Routes, Route };

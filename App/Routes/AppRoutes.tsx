import Home from "../Screens/Home/Home";
import Greetings from "../Screens/Greetings";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import { AppTab } from "./AppTab";

enum Route {
  StartScreen = "Start",
  HomeScreen = "Home",
  LoginScreen = "Login",
  SignUpScreen = "SignUp",
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
  },
  {
    name: Route.SignUpScreen,
    screen: SignUp,
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

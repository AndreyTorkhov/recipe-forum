import Home from "../Screens/Home";
import Greetings from "../Screens/Greetings";

enum Route {
  StartScreen = "Start",
  HomeScreen = "Home",
}

const Routes = [
  {
    name: Route.StartScreen,
    screen: Greetings,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.HomeScreen,
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export { Routes, Route };

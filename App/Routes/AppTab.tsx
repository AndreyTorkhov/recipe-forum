import React from "react";
import { View, Image, Dimensions } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Greetings from "../Screens/Greetings";
import { styled } from "nativewind";

const Tab = createBottomTabNavigator();

enum tabs {
  HomeTab = "Home",
  LoginTab = "Login",
  SignUpTab = "SignUp",
  GreetingsTab = "Greetings",
}

const TABS = [
  {
    title: tabs.HomeTab,
    screen: Home,
    icon: require("../../assets/icons/house.png"),
  },
  {
    title: tabs.LoginTab,
    screen: Login,
    icon: require("../../assets/icons/search.png"),
  },
  {
    title: tabs.SignUpTab,
    screen: SignUp,
    icon: require("../../assets/icons/notification.png"),
  },
  {
    title: tabs.GreetingsTab,
    screen: Greetings,
    icon: require("../../assets/icons/profile.png"),
  },
];

const { width } = Dimensions.get("window");
const tabWidth = width / 4;

const TabBarStyle = styled(
  View,
  "flex flex-row h-[83px] bg-white rounded-t-[16px]"
);

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: "#97A2B0",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "white",
          height: 83,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: "#C6E3E",
      }}
    >
      {TABS.map((tab, index) => (
        <Tab.Screen
          key={tab.title}
          name={tab.title}
          component={tab.screen}
          options={({ route }): BottomTabNavigationOptions => ({
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (
              <View
                className={`flex items-center justify-center h-full w-full ${
                  focused ? "bg-[#70B9BE]" : "bg-white"
                } `}
                style={{ width: tabWidth }}
              >
                <Image
                  source={tab.icon}
                  style={{
                    height: size,
                    width: size,
                    tintColor: focused ? "#FFFFFF" : "#97A2B0",
                  }}
                />
              </View>
            ),
            tabBarItemStyle: {
              width: tabWidth,
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export { AppTab, tabs };

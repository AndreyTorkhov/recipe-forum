import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

enum tabs {
  HomeTab = "HomeTab",
  ProfileTab = "Profile",
}

const TABS = [
  {
    title: tabs.HomeTab,
    screen: Home,
    icon: require("../../assets/icons/house.png"),
  },
  {
    title: tabs.ProfileTab,
    screen: Profile,
    icon: require("../../assets/icons/profile.png"),
  },
];

const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View className="absolute bottom-0 w-full h-20 bg-white shadow-lg rounded-t-3xl border-gray-200 border-[1px] border-b-0">
      <View className="flex-row justify-around w-full h-full p-3">
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              className="flex items-center justify-center"
            >
              <Image
                source={TABS[index].icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: isFocused ? "#70B9BE" : "#97A2B0",
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        className="absolute -top-6 left-1/2 -translate-x-8 w-16 h-16 bg-black rounded-full items-center justify-center shadow-md border-2 border-white"
        onPress={() => navigation.navigate("CreateRecipe")}
      >
        <Image
          source={require("../../assets/icons/camera.png")}
          className="w-8 h-8 tint-white"
        />
      </TouchableOpacity>
    </View>
  );
};

const AppTab = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-[#F5F7FA]"
      edges={["bottom", "left", "right"]}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        {TABS.map((tab) => (
          <Tab.Screen key={tab.title} name={tab.title} component={tab.screen} />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export { AppTab, tabs };

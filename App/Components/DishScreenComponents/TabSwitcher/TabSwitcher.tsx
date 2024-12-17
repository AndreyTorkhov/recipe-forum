import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface TabSwitcherProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabSwitcher = (props: TabSwitcherProps) => {
  const { tabs, activeTab, setActiveTab } = props;
  return (
    <View className="flex-row justify-around bg-gray-300 py-1 rounded-2xl mb-2">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          className={`px-10 w-max py-3 ${
            activeTab === tab ? "bg-black text-white" : "text-gray-500"
          } rounded-xl`}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            className={`${
              activeTab === tab ? "text-white" : "text-black"
            } font-bold`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabSwitcher;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Greeting from "../../Components/HomeScreenComponents/GreetingForm";
import Search from "../../Components/HomeScreenComponents/SearchInput/";
import PopularRecipeList from "../../Components/HomeScreenComponents/PopularRecipeList";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const handleSearch = (query: string) => {
    console.log("Поиск:", query);
  };

  return (
    <View className="flex-1 bg-[#FBFBFB] pt-12 pl-6">
      <ScrollView className="pb-20">
        <Greeting name="Andrey Torkhov" />

        <Search onSearch={handleSearch} />

        <PopularRecipeList />

        {/* Рекомендации */}
        <View className="mb-6">
          <Text className="text-lg font-bold">Рекомендации</Text>
        </View>
      </ScrollView>

      <StatusBar style="dark" />
    </View>
  );
};

export default Home;

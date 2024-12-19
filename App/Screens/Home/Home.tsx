import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Greeting from "../../Components/HomeScreenComponents/GreetingForm";
import Search from "../../Components/HomeScreenComponents/SearchInput/";
import PopularRecipeList from "../../Components/HomeScreenComponents/PopularRecipeList";
import RecomendationRecipeList from "../../Components/HomeScreenComponents/RecomendationRecipeList";
import { ScreenNavigationProp } from "../../Types/navigation";
import { StatusBar } from "expo-status-bar";
import useUser from "../../lib/useUser";

type Props = {
  navigation?: ScreenNavigationProp<"Home">;
};

const Home = ({ navigation }: Props) => {
  const handleSearch = (query: string) => {
    console.log("Поиск:", query);
  };

  const { name } = useUser();

  const sections = [
    {
      id: "greeting",
      renderItem: () => <Greeting name={name} navigation={navigation} />,
    },
    { id: "search", renderItem: () => <Search onSearch={handleSearch} /> },
    { id: "popular", renderItem: () => <PopularRecipeList /> },
    { id: "recommendations", renderItem: () => <RecomendationRecipeList /> },
  ];

  return (
    <View className="flex-1 bg-[#FBFBFB] pt-12 pl-6 mb-20">
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.renderItem()}
        ListFooterComponent={<StatusBar style="dark" />}
      />
    </View>
  );
};

export default Home;

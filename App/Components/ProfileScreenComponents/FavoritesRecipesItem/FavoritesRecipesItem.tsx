import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface PopularRecipeItemProps {
  //   img: string;
  title: string;
  //   imgAuthor: string;
  authorName: string;
}

const FavoritesRecipesItem = (props: PopularRecipeItemProps) => {
  const { title, authorName } = props;
  return (
    <View className="bg-white shadow-md rounded-2xl w-[48%] p-3 mb-3">
      <View className="relative mb-1">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          className="h-[88px] w-full rounded-2xl"
        />
        <TouchableOpacity className="absolute top-2 right-2 bg-white w-[28px] h-[28px] rounded-lg items-center justify-center shadow-md">
          <Image source={require("./img/Heart.png")} className="w-4 h-4" />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          className="text-base font-bold leading-[135%] mb-2"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/20" }}
            className="w-[20px] h-[20px] rounded-full mr-2"
          />
          <Text className="text-sm text-gray-500">{authorName}</Text>
        </View>
      </View>
    </View>
  );
};

export default FavoritesRecipesItem;

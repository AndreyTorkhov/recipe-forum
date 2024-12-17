import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonMoreInfo from "../../ui/ButtonMoreInfo";

interface RecomendationRecipeItemProps {
  //   imageRecipe: string
  //   imageAuthor: string;
  authorName: string;
  title: string;
}

function RecomendationRecipeItem(props: RecomendationRecipeItemProps) {
  const { title, authorName } = props;
  return (
    <View className="bg-white rounded-2xl shadow-xl pl-2 border-[#FBFBFB] border-2 shadow-[#C4C4C4] w-full flex-row items-center justify-between mb-4">
      <Image
        source={{ uri: "https://via.placeholder.com/100" }}
        className="w-[100px] h-20 rounded-2xl my-2"
      />

      <View className="flex-1 flex-row items-center justify-between px-2">
        <View>
          <Text
            className="text-base font-bold leading-[145%] mt-2 max-w-[150px] pb-2"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://via.placeholder.com/20" }}
              className="w-[20px] h-[20px] rounded-full"
            />
            <Text
              className="text-sm leading-[145%] ml-2 max-w-[150px] text-[#97A2B0]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {authorName}
            </Text>
          </View>
        </View>
        <ButtonMoreInfo />
      </View>
    </View>
  );
}

export default RecomendationRecipeItem;

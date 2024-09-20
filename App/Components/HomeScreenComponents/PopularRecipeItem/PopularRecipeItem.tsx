import React from "react";
import { View, Text, Image } from "react-native";

interface PopularRecipeItemProps {
  //   key: number | string;
  //   img: string;
  title: string;
}

function PopularRecipeItem(props: PopularRecipeItemProps) {
  const { title } = props;
  return (
    <View className="bg-white rounded-2xl shadow-xl pl-[6px] border-[#FBFBFB] border-2 shadow-[#C4C4C4] min-w-[94px]">
      <Image
        source={{ uri: "https://via.placeholder.com/84" }}
        className="w-20 h-20 rounded-2xl mt-1"
      />
      <Text
        className="text-base leading-[145%] mt-2 max-w-[85px]"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
  );
}

export default PopularRecipeItem;

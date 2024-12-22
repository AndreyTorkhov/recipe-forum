import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonMoreInfo from "../../ui/ButtonMoreInfo";
import { ScreenNavigationProp } from "../../../Types/navigation";
import { transformUrl } from "../../../lib/transformUrl";

interface RecomendationRecipeItemProps {
  id: number;
  authorName: string;
  title: string;
  image: string;
  navigation: ScreenNavigationProp<"Home">;
}

function RecomendationRecipeItem(props: RecomendationRecipeItemProps) {
  const { id, title, authorName, image, navigation } = props;
  // console.log("тут", image);

  const transformedUrl = transformUrl(image || "string");

  const handleNavigateToDish = () => {
    navigation.navigate("Dish", { id });
  };

  return (
    <View className="bg-white rounded-2xl shadow-xl pl-2 border-[#FBFBFB] border-2 shadow-[#C4C4C4] w-full flex-row items-center justify-between mb-4">
      <Image
        source={{
          uri: transformedUrl,
        }}
        style={{ width: 100, height: 80, borderRadius: 16, marginVertical: 8 }}
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
            <Text
              className="text-sm leading-[145%] ml-2 max-w-[150px] text-[#97A2B0]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Автор: {authorName}
            </Text>
          </View>
        </View>
        <ButtonMoreInfo onPress={handleNavigateToDish} />
      </View>
    </View>
  );
}

export default RecomendationRecipeItem;

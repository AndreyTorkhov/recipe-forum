import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonMoreInfo from "../../ui/ButtonMoreInfo";

interface AvatarCardProps {
  imageUri?: string;
  name: string;
  status: string;
  onEditPress: () => void;
}

const Avatar: React.FC<AvatarCardProps> = ({
  imageUri = "https://via.placeholder.com/48",
  name,
  status,
  onEditPress,
}) => {
  return (
    <View className="bg-white shadow-xl rounded-2xl p-4 flex-row items-center justify-between">
      <Image
        source={{ uri: imageUri }}
        className="w-[48px] h-[48px] rounded-full"
      />

      <View className="flex-1 px-4">
        <Text className="text-lg font-bold text-black">{name}</Text>
        <Text className="text-sm text-gray-500">{status}</Text>
      </View>

      <ButtonMoreInfo onPress={onEditPress} />
    </View>
  );
};

export default Avatar;

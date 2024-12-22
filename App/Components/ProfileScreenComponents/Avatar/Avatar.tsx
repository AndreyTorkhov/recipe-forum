import React from "react";
import { View, Text, Image } from "react-native";
import ButtonMoreInfo from "../../ui/ButtonMoreInfo";
import Icon from "react-native-vector-icons/MaterialIcons";

interface AvatarCardProps {
  imageUri?: string;
  name: string;
  status?: string;
  onEditPress?: () => void;
}

const Avatar: React.FC<AvatarCardProps> = ({ name, status, onEditPress }) => {
  return (
    <View className="bg-white shadow-xl rounded-2xl p-4 flex-row items-center justify-between">
      <View className="w-[48px] h-[48px] rounded-full">
        <Icon name={"person"} size={48} color="black" />
      </View>

      <View className="flex-1 px-4">
        <Text className="text-lg font-bold text-black">{name}</Text>
        {status && <Text className="text-sm text-gray-500">{status}</Text>}
      </View>

      {onEditPress && <ButtonMoreInfo onPress={onEditPress} />}
    </View>
  );
};

export default Avatar;

import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import Avatar from "../../Components/ProfileScreenComponents/Avatar";
import FavoritesRecipesList from "../../Components/ProfileScreenComponents/FavoritesRecipesList";
import { StatusBar } from "expo-status-bar";
import { ScreenNavigationProp } from "../../Types/navigation";
import { useUserStore } from "../../Store/useUserStore";

type Props = {
  navigation: ScreenNavigationProp<"Profile">;
};

const Profile = ({ navigation }: Props) => {
  const handleEditProfile = () => {
    console.log("Edit Profile Pressed");
  };

  const name = useUserStore((state) => state.name);

  return (
    <View className="flex-1 bg-[#FBFBFB] p-6 pb-0 mb-20">
      <View className="my-8 bg-transparent w-full">
        <Text className="text-2xl leading-[135%] font-bold text-start text-black">
          Аккаунт
        </Text>
      </View>

      <Avatar name={name} status="Статус: Активен" />

      <FavoritesRecipesList />

      <StatusBar style="dark" />
    </View>
  );
};

export default Profile;

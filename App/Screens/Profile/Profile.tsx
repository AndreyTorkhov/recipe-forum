import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import Avatar from "../../Components/ProfileScreenComponents/Avatar";
import FavoritesRecipesList from "../../Components/ProfileScreenComponents/FavoritesRecipesList";
import { StatusBar } from "expo-status-bar";
import { ScreenNavigationProp } from "../../Types/navigation";

type Props = {
  navigation: ScreenNavigationProp<"Profile">;
};

const Profile = ({ navigation }: Props) => {
  // const likedRecipes = [
  //   { id: "1", title: "Spaghetti Carbonara" },
  //   { id: "2", title: "Chicken Alfredo" },
  //   { id: "3", title: "Caesar Salad" },
  // ];

  const handleEditProfile = () => {
    console.log("Edit Profile Pressed");
  };

  return (
    <View className="flex-1 bg-[#FBFBFB] p-6">
      <View className="my-8 bg-transparent w-full">
        <Text className="text-2xl leading-[135%] font-bold text-start text-black">
          Account
        </Text>
      </View>

      <Avatar
        name="Andrey Torkhov"
        status="Status: Active"
        onEditPress={handleEditProfile}
      />

      <FavoritesRecipesList />

      <StatusBar style="dark" />
    </View>
  );
};

export default Profile;

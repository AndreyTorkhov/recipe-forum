import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import FavoritesRecipesItem from "../FavoritesRecipesItem";

interface Recipe {
  id: string;
  title: string;
  authorName: string;
}

function FavoritesRecipesList() {
  const recipes: Recipe[] = [
    { id: "1", title: "Spaghetti Carbonara", authorName: "John Doe" },
    { id: "2", title: "Chicken Alfredo", authorName: "Jane Smith" },
    { id: "3", title: "Caesar Salad", authorName: "Chef Mario" },
    { id: "4", title: "Beef Stroganoff", authorName: "Julia Child" },
    { id: "5", title: "Grilled Salmon", authorName: "Gordon Ramsay" },
  ];
  return (
    <View className="flex-1 pt-5">
      <Text className="text-2xl font-bold mb-4">My Favorites</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <FavoritesRecipesItem
            title={item.title}
            authorName={item.authorName}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default FavoritesRecipesList;

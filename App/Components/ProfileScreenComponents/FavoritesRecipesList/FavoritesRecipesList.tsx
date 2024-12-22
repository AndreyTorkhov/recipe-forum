import React from "react";
import { View, Text, FlatList } from "react-native";
import { useFavoriteStore } from "../../../Store/useFavoriteStore";
import { useDishStore } from "../../../Store/useDishStore";
import FavoritesRecipesItem from "../FavoritesRecipesItem";

const FavoritesRecipesList = () => {
  const { favoriteDishes } = useFavoriteStore();
  const { dishes } = useDishStore();

  // Отфильтровываем только избранные блюда
  const favoriteRecipes = dishes.filter((dish) =>
    favoriteDishes.includes(dish.id)
  );

  return (
    <View className="flex-1 pt-5">
      <Text className="text-2xl font-bold mb-4">Избранное</Text>
      {favoriteRecipes.length > 0 ? (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => <FavoritesRecipesItem id={item.id} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text className="text-gray-600">Пока ничего нет...</Text>
      )}
    </View>
  );
};

export default FavoritesRecipesList;

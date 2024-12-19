import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import RecomendationRecipeItem from "../RecomendationRecipeItem";
import { ScreenNavigationProp } from "../../../Types/navigation";
import { useDishStore } from "../../../Store/useDishStore";

interface Recipe {
  navigation: ScreenNavigationProp<"Home">;
}

function RecomendationRecipeList(props: Recipe) {
  const { navigation } = props;
  const { dishes, isLoading, error, fetchDishes } = useDishStore();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes]);

  const visibleRecipes = showAll ? dishes : dishes.slice(0, 5);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#70B9BE" />
      </View>
    );
  }

  if (!dishes.length) {
    return (
      <View>
        <Text className="text-gray-500">Нет популярных рецептов</Text>
      </View>
    );
  }

  return (
    <View className="pr-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Лучшие рецепты</Text>
        <TouchableOpacity
          onPress={() => setShowAll(!showAll)}
          className="bg-transparent rounded-lg px-4"
        >
          <Text className="text-[#70B9BE] text-base font-bold">
            {!!showAll ? "Скрыть" : "Больше"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={visibleRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecomendationRecipeItem
            id={item.id}
            title={item.name}
            authorName={item.creatorId.toString()}
            image={item.image}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

export default RecomendationRecipeList;

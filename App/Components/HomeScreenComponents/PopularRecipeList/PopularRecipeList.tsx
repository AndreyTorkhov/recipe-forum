import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import PopularRecipeItem from "../PopularRecipeItem";
import { useDishStore } from "../../../Store/useDishStore";

function PopularRecipeList() {
  const { dishes, isLoading, error, fetchDishes } = useDishStore();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
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
    <View className="pr-2">
      <View className="flex flex-row items-center">
        <Text className="text-xl font-bold mr-2">Популярные рецепты</Text>
        <Pressable onPress={toggleExpansion}>
          <Text className="text-[#70B9BE] text-base ml-24 font-bold">
            {isExpanded ? "Hide" : "View All"}
          </Text>
        </Pressable>
      </View>

      {isExpanded ? (
        <View className="flex flex-wrap flex-row left-[-10px]">
          {dishes.map((dish) => (
            <View key={dish.id} className="w-1/3 p-2">
              <PopularRecipeItem title={dish.name} />
            </View>
          ))}
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          <View className="flex flex-row">
            {dishes.map((dish) => (
              <View key={dish.id} className="p-3 ml-[-10px]">
                <PopularRecipeItem title={dish.name} />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default PopularRecipeList;

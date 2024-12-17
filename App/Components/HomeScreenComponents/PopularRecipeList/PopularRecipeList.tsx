import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import PopularRecipeItem from "../PopularRecipeItem";

function PopularRecipeList() {
  const recipes = [
    { id: "1", title: "Рецепт 1" },
    { id: "2", title: "Рецепт 2" },
    { id: "3", title: "Рецепт 3" },
    { id: "4", title: "Рецепт 1" },
    { id: "5", title: "Рецепт 2" },
    { id: "6", title: "Рецепт 3" },
    { id: "7", title: "Рецепт 1" },
    { id: "8", title: "Рецепт 2" },
    { id: "9", title: "Рецепт 3" },
    { id: "10", title: "Рецепт 1" },
    { id: "11", title: "Рецепт 2" },
    { id: "12", title: "Рецепт 3" },
    { id: "13", title: "Рецепт 1" },
    { id: "14", title: "Рецепт 2" },
    { id: "15", title: "Рецепт 3" },
    { id: "16", title: "Рецепт 1" },
    { id: "17", title: "Рецепт 2" },
    { id: "18", title: "Рецепт 3" },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View className="pr-2">
      <View className="flex flex-row items-center">
        <Text className="text-xl font-bold mr-2">Popular Recipes</Text>
        <Pressable onPress={toggleExpansion}>
          <Text className="text-[#70B9BE] text-base ml-24 font-bold">
            View All
          </Text>
        </Pressable>
      </View>

      {isExpanded ? (
        <View className="flex flex-wrap flex-row left-[-10px]">
          {recipes.map((recipe) => (
            <View key={recipe.id} className="w-1/3 p-2">
              <PopularRecipeItem title={recipe.title} />
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
            {recipes.map((recipe) => (
              <View key={recipe.id} className="p-3 ml-[-10px]">
                <PopularRecipeItem title={recipe.title} />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default PopularRecipeList;

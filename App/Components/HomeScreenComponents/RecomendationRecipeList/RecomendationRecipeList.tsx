import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import RecomendationRecipeItem from "../RecomendationRecipeItem";

interface Recipe {
  id: string;
  title: string;
  authorName: string;
}

function RecomendationRecipeList() {
  const recipes: Recipe[] = [
    { id: "1", title: "Spaghetti Carbonara", authorName: "John Doe" },
    { id: "2", title: "Chicken Alfredo", authorName: "Jane Smith" },
    { id: "3", title: "Caesar Salad", authorName: "Chef Mario" },
    { id: "4", title: "Beef Stroganoff", authorName: "Julia Child" },
    { id: "5", title: "Grilled Salmon", authorName: "Gordon Ramsay" },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleRecipes = showAll ? recipes : recipes.slice(0, 3);

  return (
    <View className="pr-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Editor’s Choice</Text>
        <TouchableOpacity
          onPress={() => setShowAll(!showAll)}
          className="bg-transparent rounded-lg px-4"
        >
          <Text className="text-[#70B9BE] text-base font-bold">View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={visibleRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecomendationRecipeItem
            title={item.title}
            authorName={item.authorName}
          />
        )}
      />
    </View>
  );
}

export default RecomendationRecipeList;

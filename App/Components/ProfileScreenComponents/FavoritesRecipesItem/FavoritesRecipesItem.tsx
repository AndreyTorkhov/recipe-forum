import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useFavoriteStore } from "../../../Store/useFavoriteStore";
import { useDishStore } from "../../../Store/useDishStore";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../../Types/navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

interface FavoritesRecipesItemProps {
  id: number; // ID рецепта
}

const FavoritesRecipesItem = ({ id }: FavoritesRecipesItemProps) => {
  const { toggleFavorite, favoriteDishes } = useFavoriteStore();
  const { dishes } = useDishStore();
  const navigation: ScreenNavigationProp<"Home"> = useNavigation();

  const [recipe, setRecipe] = useState<{
    title: string;
    image: string;
    authorName: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const dish = dishes.find((dish) => dish.id === id); // Ищем блюдо в сторе
        if (dish) {
          setRecipe({
            title: dish.name,
            image: dish.image || "https://via.placeholder.com/150",
            authorName: dish.id.toString() || "Unknown",
          });
        } else {
          // Здесь можно добавить логику загрузки данных из API по ID
          setRecipe({
            title: `Recipe ${id}`,
            image: "https://via.placeholder.com/150",
            authorName: "Unknown",
          });
        }
      } catch (error) {
        console.error("Ошибка загрузки рецепта:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id, dishes]);

  const isFavorite = favoriteDishes.includes(id);

  if (loading) {
    return (
      <View className="w-[48%] h-[150px] justify-center items-center bg-white shadow-md rounded-2xl mb-3">
        <ActivityIndicator size="large" color="#70B9BE" />
      </View>
    );
  }

  if (!recipe) {
    return null; // Если рецепт не найден
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Dish", { id })}
      className="bg-white shadow-md rounded-2xl w-[48%] p-3 mb-3"
    >
      <View className="relative mb-1">
        <Image
          source={{ uri: recipe.image }}
          className="h-[88px] w-full rounded-2xl"
        />
        <TouchableOpacity
          onPress={() => toggleFavorite(id)}
          className="absolute top-2 right-2 bg-white w-[28px] h-[28px] rounded-lg items-center justify-center shadow-md"
        >
          <Icon
            name={isFavorite ? "favorite" : "favorite-border"} // Иконки Material Icons
            size={18}
            color={isFavorite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          className="text-base font-bold leading-[135%] mb-2"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {recipe.title}
        </Text>
        <View className="flex-row items-center">
          {/* <Image
            source={{ uri: "https://via.placeholder.com/20" }}
            className="w-[20px] h-[20px] rounded-full mr-2"
          /> */}
          <Text className="text-sm text-gray-500">
            Автор: {recipe.authorName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoritesRecipesItem;

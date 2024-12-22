import { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { IngredientService } from "../../../Services/ingredientServices";

interface Ingredient {
  id: number;
  name: string;
  image?: string;
}

const IngredientsList = ({ ingredientIds }: { ingredientIds: number[] }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  console.log(ingredientIds);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      try {
        const fetchedIngredients = await Promise.all(
          ingredientIds.map((id) =>
            IngredientService.getIngredientById(id).then((res) => res.data)
          )
        );
        setIngredients(fetchedIngredients);
      } catch (error) {
        console.error("Ошибка загрузки ингредиентов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, [ingredientIds]);

  console.log(ingredients);

  if (loading) {
    return <ActivityIndicator size="large" color="#70B9BE" />;
  }

  return (
    <View className="p-4 h-auto">
      {ingredients.map((item) => (
        <View
          key={item.id}
          className="flex-row justify-between items-center bg-white py-3 px-4 mb-2 rounded-lg shadow-lg shadow-sky-200"
        >
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-gray-200 rounded-full mr-3">
              <Image
                source={{
                  uri: item.image || "https://via.placeholder.com/150",
                }}
                className="h-[40px] w-full rounded-2xl"
              />
            </View>
            <Text className="font-bold text-black">{item.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default IngredientsList;

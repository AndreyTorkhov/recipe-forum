import { Text, View, TouchableOpacity } from "react-native";
import DescriptionWithReadMore from "../../ui/DescriptionWithReadMore";
import { useFavoriteStore } from "../../../Store/useFavoriteStore";
import { MaterialIcons } from "@expo/vector-icons"; // Используем значки из Expo

interface DishInfoProps {
  id: number; // Добавляем ID блюда
  name: string;
  time?: string;
  description: string;
}

function DishInfo({ id, name, time, description }: DishInfoProps) {
  const { favoriteDishes, toggleFavorite } = useFavoriteStore();
  const isFavorite = favoriteDishes.includes(id);

  return (
    <View>
      <View className="flex-row justify-between w-full pb-2 items-center">
        <Text className="text-2xl leading-[135%] font-bold text-black">
          {name}
        </Text>
        <TouchableOpacity onPress={() => toggleFavorite(id)}>
          <MaterialIcons
            name={isFavorite ? "favorite" : "favorite-border"}
            size={28}
            color={isFavorite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
      {time && (
        <Text className="text-xl leading-[135%] text-gray-600">{time}</Text>
      )}
      <DescriptionWithReadMore description={description} />
    </View>
  );
}

export default DishInfo;

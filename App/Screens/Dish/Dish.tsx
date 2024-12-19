import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../Components/ProfileScreenComponents/Avatar";
import DishInfo from "../../Components/DishScreenComponents/DishInfo";
import TabSwitcher from "../../Components/DishScreenComponents/TabSwitcher";
import IngredientsList from "../../Components/DishScreenComponents/IngredientsList";
import { ScreenNavigationProp } from "../../Types/navigation";
import { DishService } from "../../Services/dishServices";

type Props = {
  navigation: ScreenNavigationProp<"Dish">;
  route: { params: { id: number } };
};

const Dish = ({ route }: Props) => {
  const { id } = route.params;
  const [activeTab, setActiveTab] = useState("Ingredients");
  const [dish, setDish] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await DishService.getDishById(id);
        setDish(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке блюда:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDish();
  }, [id]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!dish) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Блюдо не найдено</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <ScrollView className="h-full bg-[#FBFBFB]">
          <View className="h-[40vh] pb-0 ">
            <ImageBackground
              source={{ uri: dish.image || "https://via.placeholder.com/100" }}
              resizeMode="cover"
              className="flex-1"
            >
              <LinearGradient
                colors={["rgba(255,255,255,0.9)", "transparent"]}
                className="flex-1"
              />
            </ImageBackground>
          </View>
          <View className="flex-1 bg-[#FBFBFB] p-4 bottom-8 rounded-t-[36px]">
            <DishInfo
              name={dish.name}
              time={`${dish.time || "N/A"} min`}
              description={dish.description || "Описание отсутствует"}
            />
            <View className="flex-1">
              <TabSwitcher
                tabs={["Ingredients", "Instructions"]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {activeTab === "Ingredients" && <IngredientsList />}
              {activeTab === "Instructions" && (
                <View className="flex-1 h-64 bg-red-700"></View>
              )}
            </View>

            <View className="bg-[#EBF0F6] h-[2px] w-full mb-4"></View>
            <Avatar name={dish.creatorName || "N/A"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dish;

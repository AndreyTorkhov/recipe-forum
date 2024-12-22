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
import InstructionsList from "../../Components/DishScreenComponents/InstructionsList";
import { ScreenNavigationProp } from "../../Types/navigation";
import { useDishStore } from "../../Store/useDishStore";

type Props = {
  navigation: ScreenNavigationProp<"Dish">;
  route: { params: { id: number } };
};

const Dish = ({ route }: Props) => {
  const { id } = route.params;
  const [activeTab, setActiveTab] = useState("Ingredients");
  const { dishes } = useDishStore();

  const curr = dishes.filter((dish) => dish.id === id);

  console.log(curr);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <ScrollView className="h-full bg-[#FBFBFB]">
          <View className="h-[40vh] pb-0 ">
            <ImageBackground
              source={{
                uri: curr[0].image || "https://via.placeholder.com/100",
              }}
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
              id={curr[0].id}
              name={curr[0].name}
              description={curr[0].description || "Описание отсутствует"}
            />
            <View className="flex-1">
              <TabSwitcher
                tabs={["Ingredients", "Instructions"]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {activeTab === "Ingredients" && (
                <IngredientsList ingredientIds={curr[0].ingredientIds} />
              )}
              {activeTab === "Instructions" && (
                <InstructionsList stepIds={curr[0].stepIds} />
              )}
            </View>

            <View className="bg-[#EBF0F6] h-[2px] w-full mb-4"></View>
            <Avatar name={curr[0].creatorName || "N/A"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dish;

import { useState } from "react";
import { Text, ScrollView, View, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../Components/ProfileScreenComponents/Avatar";
import DishInfo from "../../Components/DishScreenComponents/DishInfo";
import TabSwitcher from "../../Components/DishScreenComponents/TabSwitcher";
import IngredientsList from "../../Components/DishScreenComponents/IngredientsList";
import { ScreenNavigationProp } from "../../Types/navigation";

type Props = {
  navigation: ScreenNavigationProp<"Dish">;
};

const Dish = ({ navigation }: Props) => {
  const [activeTab, setActiveTab] = useState("Ingredients");
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <ScrollView className="h-full bg-[#FBFBFB]">
          {/* className="h-full flex flex-col justify-between bg-[#FBFBFB]" */}
          <View className="h-[40vh] pb-0 ">
            <ImageBackground
              source={{ uri: "https://via.placeholder.com/100" }}
              resizeMode="cover"
              className="flex-1"
            >
              <LinearGradient
                colors={["rgba(255,255,255,0.9)", "transparent"]}
                className="flex-1 "
              />
            </ImageBackground>
          </View>
          {/* разные блоки */}
          <View className="flex-1 bg-[#FBFBFB] p-4 bottom-8 rounded-t-[36px]">
            {/* о блюде */}
            <DishInfo
              name={"Healthy Taco Salad"}
              time={"15 min"}
              description={
                "This Healthy Taco Salad is the universal delight of taco night This Healthy Taco Salad is the universal delight of taco night View MoreThis Healthy Taco Salad is the universal delight of taco night View More"
              }
            />
            {/* переключатель */}
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
            {/* создатель */}
            <Avatar name={"Жижа"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Dish;

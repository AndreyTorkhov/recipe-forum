import { Text, View, TouchableOpacity, Image } from "react-native";
import ButtonDefoult from "../../ui/ButtonDefoult";

interface IngredientsList {
  //   image: string;
  //   title: string;
  id: string;
  title: string;
  //   authorName: string;
}

const IngredientsList = () => {
  const ingredients: IngredientsList[] = [
    { id: "1", title: "Spaghetti Carbonara" },
    { id: "2", title: "Chicken Alfredo" },
    { id: "3", title: "Caesar Salad" },
    { id: "4", title: "Beef Stroganoff" },
    { id: "5", title: "Grilled Salmon" },
  ];
  return (
    <View className="p-4 h-auto">
      {ingredients.map((item, index) => (
        <View
          key={item.id}
          className="flex-row justify-between items-center bg-white py-3 px-4 mb-2 rounded-lg shadow-lg shadow-sky-200"
        >
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-gray-200 rounded-full mr-3">
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                className="h-[40px] w-full rounded-2xl"
              />
            </View>
            <Text className="font-bold text-black">{item.title}</Text>
          </View>
        </View>
      ))}
      <ButtonDefoult
        onPress={() => alert("тык")}
        text={"Add To Cart"}
        buttonState={"blue"}
      />
    </View>
  );
};

export default IngredientsList;

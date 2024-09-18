import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";

type Props = {
  navigation: ScreenNavigationProp<"Start">;
};

const Greetings = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="via-black">Здарова</Text>
      <Pressable
        className="mt-10 bg-white shadow-slate-800 rounded-xl"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="py-2 px-4 text-xl">Начать</Text>
      </Pressable>
      <StatusBar style="dark" />
    </View>
  );
};

export default Greetings;

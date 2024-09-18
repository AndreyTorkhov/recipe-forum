import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center bg-red-400">
      <Text>Ты дома</Text>
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;

import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";
// import icons from '../../../assets/iconsStart.png'

type Props = {
  navigation: ScreenNavigationProp<"Start">;
};

const Greetings = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-[#70B9BE]">
      <Pressable
        className="z-10 absolute right-[22px] top-[58px]"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-[#E6EBF2] text-lg font-bold">Later</Text>
      </Pressable>
      <View className="mt-[220px]">
        <Image source={require("../../../assets/iconsStart.png")} />
      </View>

      <View className="pl-[16px] pr-[16px] bottom-[280px] pb-[20px]">
        <Text className="text-3xl text-white text-center text-bold">
          Help your path to health goals with happiness
        </Text>
      </View>
      <View className="w-full pl-[16px] pr-[16px]">
        <Pressable
          className="z-10 bottom-[280px] bg-[#042628] rounded-2xl "
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-[#E6EBF2] text-lg font-bold text-center py-4">
            Login
          </Text>
        </Pressable>
        <Pressable
          className="z-10 bottom-[280px]"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-[#E6EBF2] text-lg font-bold text-center py-4">
            Create New Account
          </Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Greetings;

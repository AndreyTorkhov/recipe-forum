import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
// import icons from '../../../assets/iconsStart.png'

type Props = {
  navigation: ScreenNavigationProp<"Start">;
};

const Greetings = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-[#70B9BE] p-4">
      <Pressable
        className="z-10 absolute right-[22px] top-[58px]"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-[#E6EBF2] text-lg font-bold">Later</Text>
      </Pressable>

      <View className="mt-[220px]">
        <Image source={require("../../../assets/iconsStart.png")} />
      </View>

      <View className="bottom-[280px] pb-[20px]">
        <Text className="text-3xl text-white text-center text-bold">
          Help your path to health goals with happiness
        </Text>
      </View>

      <ButtonDefoult
        onPress={() => navigation.navigate("Login")}
        text="Login"
        buttonState="black"
        btnStyle={{ bottom: 280 }}
      />
      <ButtonDefoult
        onPress={() => navigation.navigate("SignUp")}
        text="Create New Account"
        buttonState="default"
        btnStyle={{ bottom: 280 }}
      />
      <StatusBar style="dark" />
    </View>
  );
};

export default Greetings;

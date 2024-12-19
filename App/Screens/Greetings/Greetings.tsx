import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Image } from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";

type Props = {
  navigation: ScreenNavigationProp<"Start">;
};

const Greetings = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-[#70B9BE] p-4">
      <View className="mt-[220px]">
        <Image source={require("../../../assets/iconsStart.png")} />
      </View>

      <View className="bottom-[280px] pb-[20px]">
        <Text className="text-3xl text-white text-center text-bold">
          Путеводитель к здоровью и счастью
        </Text>
      </View>

      <ButtonDefoult
        onPress={() => navigation.navigate("Login")}
        text="Авторизация"
        buttonState="black"
        btnStyle={{ bottom: 280 }}
      />
      <ButtonDefoult
        onPress={() => navigation.navigate("SignUp")}
        text="Создание аккаунта"
        buttonState="default"
        btnStyle={{ bottom: 280 }}
      />
      <StatusBar style="dark" />
    </View>
  );
};

export default Greetings;

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useState } from "react";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
import InputForm from "../../Components/ui/InputForm";
import { register } from "../../Api/register";

type Props = {
  navigation: ScreenNavigationProp<"SignUp">;
};

function SignUp({ navigation }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const data = await register(name, email, password);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Ошибка",
        "Не удалось зарегистрироваться. Проверьте введённые данные."
      );
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center items-center p-4 w-full">
          <View className=" pb-[20px]">
            <Text className="text-3xl text-black text-center text-bold">
              Сomplete the form
            </Text>
          </View>

          <InputForm
            signatureText="Username"
            placeholderText="User"
            value={name}
            onChangeText={setName}
          />
          <InputForm
            signatureText="Login"
            placeholderText="you@yandex.ru"
            value={email}
            onChangeText={setEmail}
          />
          <InputForm
            signatureText="Password"
            placeholderText="0000"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <ButtonDefoult
            onPress={handleSignUp}
            text="Sign up"
            buttonState="blue"
          />
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

export default SignUp;

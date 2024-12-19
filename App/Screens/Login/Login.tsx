import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
import InputForm from "../../Components/ui/InputForm";
import { AuthServices } from "../../Services/authServices";

type Props = {
  navigation: ScreenNavigationProp<"Login">;
};

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await AuthServices.login({ email, password });
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Ошибка авторизации", "Исправьте введенные данные");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center items-center p-4 w-full">
          <View className=" pb-[20px]">
            <Text className="text-3xl text-black text-center text-bold">
              Заполните форму
            </Text>
          </View>

          <InputForm
            signatureText={"Почта"}
            placeholderText={"you@yandex.ru"}
            value={email}
            onChangeText={setEmail}
          />
          <InputForm
            signatureText={"Пароль"}
            placeholderText={"0000"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <ButtonDefoult
            onPress={handleLogin}
            text={loading ? "Авторизация..." : "Авторизироватсья"}
            buttonState="black"
            disabled={loading}
          />
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
};

export default Login;

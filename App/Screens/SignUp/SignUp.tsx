import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useState, useCallback } from "react";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult";
import InputForm from "../../Components/ui/InputForm";
import { AuthServices } from "../../Services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  navigation: ScreenNavigationProp<"SignUp">;
};

function SignUp({ navigation }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await AuthServices.register({ name, email, password });
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Ошибка", error.message || "Ошибка авторизации");
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
            text={loading ? "Signing in..." : "Sign up"}
            buttonState="blue"
            disabled={loading}
          />
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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
import { AuthServices } from "../../Services/authServices";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  navigation: ScreenNavigationProp<"SignUp">;
};

function SignUp({ navigation }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Ошибки для полей
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Имя не может быть пустым");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!emailRegex.test(email)) {
      setEmailError("Введите корректный адрес электронной почты");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (password.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
      isValid = false;
    } else {
      setPasswordError(null);
    }

    return isValid;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      await AuthServices.register({ name, email, password });
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
          <View className="pb-[20px]">
            <Text className="text-3xl text-black text-center text-bold">
              Заполните форму
            </Text>
          </View>

          <InputForm
            signatureText="Имя"
            placeholderText="User"
            value={name}
            onChangeText={setName}
          />
          {nameError && (
            <Text className="text-red-500 top-[-12px]">{nameError}</Text>
          )}

          <InputForm
            signatureText="Почта"
            placeholderText="you@yandex.ru"
            value={email}
            onChangeText={setEmail}
          />
          {emailError && (
            <Text className="text-red-500 top-[-12px]">{emailError}</Text>
          )}

          <InputForm
            signatureText="Пароль"
            placeholderText="Введите пароль"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {passwordError && (
            <Text className="text-red-500 top-[-12px]">{passwordError}</Text>
          )}

          <ButtonDefoult
            onPress={handleSignUp}
            text={loading ? "Создание..." : "Создать аккаунт"}
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

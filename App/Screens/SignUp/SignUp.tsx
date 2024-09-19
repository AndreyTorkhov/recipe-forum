import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";
import ButtonDefoult from "../../Components/ui/ButtonDefoult/";
import InputForm from "../../Components/ui/InputForm";

type Props = {
  navigation: ScreenNavigationProp<"SignUp">;
};

function SignUp({ navigation }: Props) {
  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center items-center p-4 w-full">
          <View className=" pb-[20px]">
            <Text className="text-3xl text-black text-center text-bold">
              Сomplete the form
            </Text>
          </View>

          <InputForm signatureText={"Username"} placeholderText={"User"} />
          <InputForm
            signatureText={"Login"}
            placeholderText={"you@yandex.ru"}
          />
          <InputForm signatureText={"Password"} placeholderText={"0000"} />

          <ButtonDefoult
            onPress={() => navigation.navigate("Home")}
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

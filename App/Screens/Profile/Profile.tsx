import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { ScreenNavigationProp } from "../../Types/navigation";

type Props = {
  navigation: ScreenNavigationProp<"Profile">;
};

const Profile = ({ navigation }: Props) => {
  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center bg-yellow-500">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="justify-center items-center p-4 w-full">
          <View className=" pb-[20px]">
            <Text className="text-3xl text-black text-center text-bold">
              Search Page-ge-ge
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
};
export default Profile;

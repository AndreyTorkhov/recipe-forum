import { Text, View, Image, Button } from "react-native";
import { getGreetingBasedOnTime } from "../../../lib/getGreetingBasedOnTime";

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  const { name } = props;
  const greeting = getGreetingBasedOnTime();

  return (
    <View className="mb-4 bg-[#FBFBFB]">
      <View className="flex-row items-center">
        <Image source={require("./img/Sun.png")} className="mr-1" />
        <Text className="text-lg">
          {greeting}, {name}
        </Text>
      </View>
    </View>
  );
}

export default Greeting;

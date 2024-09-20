import { Text, View, Image } from "react-native";

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  const { name } = props;
  return (
    <View className="mb-6 bg-white">
      <View className="flex-row items-center">
        <Image source={require("./img/Sun.png")} className="mr-1" />
        <Text className="text-sm">Good Morning</Text>
      </View>

      <Text className="text-lg font-bold">{name}</Text>
    </View>
  );
}
export default Greeting;

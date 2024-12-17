import { Text, View, Image, Button } from "react-native";
// import ButtonMoreInfo from "../../ui/ButtonMoreInfo";

interface GreetingProps {
  name: string;
  navigation: any;
}

function Greeting(props: GreetingProps) {
  const { name, navigation } = props;

  const handleNavigateToGreeting = () => {
    navigation.navigate("Start");
  };

  return (
    <View className="mb-6 bg-[#FBFBFB]">
      <View className="flex-row items-center">
        <Image source={require("./img/Sun.png")} className="mr-1" />
        <Text className="text-sm">Good Morning</Text>
      </View>

      <Text className="text-lg font-bold">{name}</Text>

      {/* <ButtonMoreInfo onPress={handleNavigateToGreeting} /> */}
    </View>
  );
}

export default Greeting;

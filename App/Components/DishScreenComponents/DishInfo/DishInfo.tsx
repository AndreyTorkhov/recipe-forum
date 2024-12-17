import { Text, View } from "react-native";
import DescriptionWithReadMore from "../../ui/DescriptionWithReadMore";

interface DishInfoProps {
  name: string;
  time: string;
  description: string;
}

function DishInfo(props: DishInfoProps) {
  const { name, time, description } = props;
  return (
    <>
      <View className="flex-row justify-between w-full pb-2">
        <Text className="text-2xl leading-[135%] font-bold text-black">
          {name}
        </Text>
        <Text className="text-xl leading-[135%] text-gray-600">{time}</Text>
      </View>
      <DescriptionWithReadMore description={description} />
    </>
  );
}

export default DishInfo;

import { TouchableOpacity, Image, GestureResponderEvent } from "react-native";

interface ButtonMoreInfoProps {
  onPress?: (event: GestureResponderEvent) => void;
}

function ButtonMoreInfo(props: ButtonMoreInfoProps) {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[24px] h-[24px] bg-[#042628] rounded-lg items-center justify-center"
    >
      <Image source={require("./img/arrow.png")} />
    </TouchableOpacity>
  );
}

export default ButtonMoreInfo;

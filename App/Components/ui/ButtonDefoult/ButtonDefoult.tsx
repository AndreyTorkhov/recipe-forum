import {
  Text,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

interface TouchableTextProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  btnStyle?: StyleProp<ViewStyle>;
  buttonState?: "default" | "black" | "blue";
}

function ButtonDefoult(props: TouchableTextProps) {
  const { onPress, text, btnStyle, buttonState = "default" } = props;

  const getButtonStyle = (): StyleProp<ViewStyle> => {
    switch (buttonState) {
      case "black":
        return { backgroundColor: "#042628" };
      case "blue":
        return { backgroundColor: "#70B9BE" };
      default:
        return { backgroundColor: "transparent" };
    }
  };

  return (
    <Pressable
      onPress={onPress}
      className="z-10 rounded-2xl w-full"
      style={[getButtonStyle(), btnStyle]}
    >
      <Text className="text-lg text-[#E6EBF2] font-bold text-center py-4">
        {text}
      </Text>
    </Pressable>
  );
}

export default ButtonDefoult;

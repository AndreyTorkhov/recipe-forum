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
  disabled?: boolean;
}

function ButtonDefoult(props: TouchableTextProps) {
  const {
    onPress,
    text,
    btnStyle,
    buttonState = "default",
    disabled = false,
  } = props;

  const getButtonStyle = (): StyleProp<ViewStyle> => {
    switch (buttonState) {
      case "black":
        return { backgroundColor: disabled ? "#666" : "#042628" };
      case "blue":
        return { backgroundColor: disabled ? "#90cfd5" : "#70B9BE" };
      default:
        return { backgroundColor: disabled ? "#ccc" : "transparent" };
    }
  };

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      className="z-10 rounded-2xl w-full"
      style={[getButtonStyle(), btnStyle]}
      disabled={disabled}
    >
      <Text className="text-lg text-[#E6EBF2] font-bold text-center py-4">
        {text}
      </Text>
    </Pressable>
  );
}

export default ButtonDefoult;

import { Text, View, TextInput } from "react-native";

interface TouchableTextProps {
  signatureText: string;
  placeholderText: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  className?: string;
}

function InputForm(props: TouchableTextProps) {
  const {
    signatureText,
    placeholderText,
    value,
    onChangeText,
    secureTextEntry = false,
    className = "",
  } = props;

  return (
    <View className={`w-full ${className}`}>
      <Text className="text-black text-bold text-base mb-1 text-left w-full">
        {signatureText}
      </Text>
      <TextInput
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className={`w-full border-[#70B9BE] border-2 h-11 mb-4 rounded-2xl px-[10px] ${className}`} // Добавляем className
      />
    </View>
  );
}

export default InputForm;

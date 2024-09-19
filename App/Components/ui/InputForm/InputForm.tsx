import { Text, View, TextInput } from "react-native";

interface TouchableTextProps {
  signatureText: string;
  placeholderText: string;
}

function InputForm(props: TouchableTextProps) {
  const { signatureText, placeholderText } = props;

  return (
    <View className="w-full">
      <Text className="text-black text-bold text-base mb-1 text-left w-full">
        {signatureText}
      </Text>
      <TextInput
        placeholder={placeholderText}
        className="w-full border-[#70B9BE] border-2 h-11 mb-4 rounded-2xl px-[10px]"
      />
    </View>
  );
}

export default InputForm;

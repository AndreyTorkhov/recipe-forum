import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface DescriptionWithReadMoreProps {
  description: string;
}

const DescriptionWithReadMore = (props: DescriptionWithReadMoreProps) => {
  const { description } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="pb-2">
      {!expanded ? (
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-base leading-[135%] text-start text-gray-600"
        >
          {description}
        </Text>
      ) : (
        <Text className="text-base leading-[135%] text-start text-gray-600">
          {description}
        </Text>
      )}
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text className="text-black text-base font-medium">
          {expanded ? "Hide" : "View More"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionWithReadMore;

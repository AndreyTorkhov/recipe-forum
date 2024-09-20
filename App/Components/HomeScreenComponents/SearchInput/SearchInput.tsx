import React, { useState, useEffect } from "react";
import { TextInput, View, Image } from "react-native";

interface SearchProps {
  onSearch: (query: string) => void;
}

function Search(props: SearchProps) {
  const { onSearch } = props;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <View className="pr-6 mb-6">
      <View className="flex-row items-center w-full border-[#E6EBF2] border-2 rounded-2xl p-4">
        <Image source={require("./img/search.png")} className="mr-4" />

        <TextInput
          placeholder="Search"
          value={query}
          onChangeText={(text) => setQuery(text)}
          className="flex-1 text-base leading-[145%]"
          placeholderTextColor="#97A2B0"
        />
      </View>
    </View>
  );
}

export default Search;

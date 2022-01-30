import { View, Text } from 'react-native';
import React from 'react';
import SearchBar from "react-native-dynamic-search-bar";
const SearchScreen = () => {
  return (
    <View>
      <SearchBar
  placeholder="Search here"
  onPress={() => alert("onPress")}
  onChangeText={(text) => console.log(text)}
/>
    </View>
  );
};

export default SearchScreen;

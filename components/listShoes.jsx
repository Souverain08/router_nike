import React from "react";
import { View, FlatList } from "react-native";
import CustomShoes from "./CustomShoes";

const ListeShoes = ({ Data }) => {
  // console.log(item);
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <CustomShoes val={item} />}
        keyExtractor={(item) => item.Id}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListeShoes;

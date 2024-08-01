import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import ImageSlider from "../../components/imageSlider";
import ListeShoes from "../../components/listShoes";
import { Data } from "../../constents/Data";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Entypo name="menu" size={30} color="white" />
        <Text style={styles.titleHeader}>BINGO SHOP</Text>
        <Ionicons name="notifications-outline" size={30} color="white" />
      </View>
      <View style={styles.containerSearch}>
        <Text style={styles.searchTitle}>Search ...</Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <ImageSlider />
      </View>
      <ListeShoes Data={Data} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040404",
    paddingTop: 30,
  },
  containerHeader: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleHeader: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  containerSearch: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#262627",
    paddingHorizontal: 20,
    paddingVertical: 13,
    margin: 15,
    borderRadius: 15,
  },
  searchTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#555252",
  },
});

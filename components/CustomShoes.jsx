import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo, Ionicons } from "@expo/vector-icons";

const CustomShoes = ({ val }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={val.Photo} style={styles.img} />
      <Text style={styles.title}>{val.Name}</Text>
      <View style={styles.star}>
        <Entypo name="star-outlined" size={26} color="#FECE00" />
        <Text style={styles.title}>{val.star}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.title}>{val.price}</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CustomShoes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 5,
    marginHorizontal: 13,
    marginVertical: 10,
    borderRadius: 15,
  },
  img: {
    width: wp(40),
    height: hp(20),
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    paddingHorizontal: 7,
  },
  star: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 7,
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
});

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => router.navigate("/(tabs)")}
        style={{ backgroundColor: "red", padding: 19 }}
      >
        <Text>Vers Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;

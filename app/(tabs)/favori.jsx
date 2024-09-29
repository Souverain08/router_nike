import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Favori = () => {
  const regionInfo = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const coordinateMarket = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  return (
    <MapView style={styles.container} region={regionInfo}>
      <Marker coordinate={coordinateMarket} title={"Vous ete ici"} />
    </MapView>
  );
};

export default Favori;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <AntDesign name="home" size={26} color={greyColor} {...props} />
    ),
    favori: (props) => (
      <MaterialIcons
        name="favorite-border"
        size={26}
        color={greyColor}
        {...props}
      />
    ),
    cart: (props) => (
      <FontAwesome name="opencart" size={26} color={greyColor} {...props} />
    ),
    profil: (props) => (
      <AntDesign name="user" size={26} color={greyColor} {...props} />
    ),
  };

  const primaryColor = "#FFF";
  const greyColor = "#FFF";
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={{
              ...styles.tabbarItem,
              backgroundColor: isFocused ? "#359AFF" : null,
              flexDirection: isFocused ? "row" : null,
              paddingHorizontal: isFocused ? 10 : null,
            }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({ color: isFocused ? primaryColor : greyColor })}
            {isFocused ? (
              <Text
                style={{
                  color: isFocused ? primaryColor : greyColor,
                  fontSize: 13,
                }}
              >
                {label}
              </Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    // position: "absolute",
    // bottom: 25,
    flexDirection: "row",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#040404",
    // marginHorizontal: 20,
    paddingVertical: 10,
    // paddingHorizontal: 30,
    // borderRadius: 25,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 10,
    // shadowOpacity: 0.1,
  },
  tabbarItem: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingVertical: 8,
  },
});

export default TabBar;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { silderImage } from "../constents/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ImageSlider = () => {
  return (
    <Carousel
      data={silderImage}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const ItemCard = ({ item, index }, ParallaxImage) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});

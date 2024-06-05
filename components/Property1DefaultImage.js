import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DefaultImage = ({
  property1DefaultImageProp,
  property1DefaultIconPosition,
  property1DefaultIconTop,
  property1DefaultIconLeft,
  property1DefaultIconWidth,
  property1DefaultIconHeight,
}) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultIconPosition),
      ...getStyleValue("top", property1DefaultIconTop),
      ...getStyleValue("left", property1DefaultIconLeft),
      ...getStyleValue("width", property1DefaultIconWidth),
      ...getStyleValue("height", property1DefaultIconHeight),
    };
  }, [
    property1DefaultIconPosition,
    property1DefaultIconTop,
    property1DefaultIconLeft,
    property1DefaultIconWidth,
    property1DefaultIconHeight,
  ]);

  return (
    <Image
      style={[styles.property1defaultIcon, property1DefaultIconStyle]}
      contentFit="cover"
      source={property1DefaultImageProp}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 60,
    height: 60,
  },
});

export default Property1DefaultImage;

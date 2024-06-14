import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Component5Icon = () => {
  return (
    <Image
      style={styles.component5Icon}
      contentFit="cover"
      source={require("../assets/component-5.png")}
    />
  );
};

const styles = StyleSheet.create({
  component5Icon: {
    position: "absolute",
    top: 107,
    left: 120,
    width: 194,
    height: 194,
  },
});

export default Component5Icon;
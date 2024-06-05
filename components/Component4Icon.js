import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Component4Icon = () => {
  return (
    <Image
      style={styles.component4Icon}
      contentFit="cover"
      source={require("../assets/component-4.png")}
    />
  );
};

const styles = StyleSheet.create({
  component4Icon: {
    position: "absolute",
    top: 200,
    left: 37,
    width: 321,
    height: 323,
  },
});

export default Component4Icon;

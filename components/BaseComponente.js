import React from "react";
import { View, Text } from "react-native";
import NavBar from "./NavBar";
import { ImageBackground } from "react-native";
import fondoDegradado from "../assets/fondoDegradado.png";

const BaseScreen = ({ children, proviene }) => {
  return (
    <ImageBackground
      source={fondoDegradado}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        {children}
        <NavBar />
      </View>
    </ImageBackground>
  );
};

export default BaseScreen;
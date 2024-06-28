import React from "react";
import { View, Text } from "react-native";
import NavBar from "./NavBar";
import { ImageBackground } from "react-native";
import fondoDegradado from "../assets/fondoDegradado.png";
import NavBarProfesor from "./NavBarProfesor";

const BaseScreen = ({ children, proviene, alumno = true, visible = true }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={fondoDegradado}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1 }}>
        {children}
        {alumno ? (
          <NavBar proviene={proviene} />
        ) : (
          visible && <NavBarProfesor proviene={proviene} />
        )}
      </View>
    </ImageBackground>
  );
};

export default BaseScreen;

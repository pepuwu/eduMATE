import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import fondoDegradado from "../assets/fondoDegradado.png";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { Image } from "expo-image";
import BaseScreen from "../components/BaseComponente";

const InicioAlumnoScreen = () => {
  return (
    <BaseScreen>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontFamily: FontFamily.sunflowerBold,
          fontSize: FontSize.size_31xl,
          paddingTop: 120,
        }}
      >
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
      <Image
        source={require("../assets/component-5.png")}
        contentFit="cover"
        style={styles.avatarQRInicio}
      ></Image>
      <Text style={styles.bienvenidaContainer}>
        <Text style={styles.bienvenida}>{`¡Bienvenido, `}</Text>
        <Text style={styles.nombre}>Usuario!</Text>
      </Text>
    </BaseScreen>
  );
};

export default InicioAlumnoScreen;

const styles = StyleSheet.create({
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  avatarQRInicio: {
    width: 310,
    height: 310,
    marginTop: 50,
  },
  bienvenidaContainer: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.barlowCondensedSemiBold,
    paddingTop: 30,
  },
  bienvenida: { color: Color.colorBlack },
  nombre: { color: Color.colorDodgerblue },
});

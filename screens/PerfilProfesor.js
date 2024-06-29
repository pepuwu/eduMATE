import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BaseScreen from "../components/BaseComponente";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PerfilProfesorPage = () => {
  return (
    <BaseScreen proviene={"profile"} alumno={false}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontFamily: FontFamily.sunflowerBold,
            fontSize: FontSize.size_21xl,
            paddingTop: 60,
            paddingBottom: 25,
          }}
        >
          <Text style={styles.edu}>edu</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
        <Image
          source={require("../assets/ProfesorAvatar.png")}
          contentFit="cover"
          style={styles.avatarQRInicio}
        ></Image>
        <View style={styles.alumnoInformacionContainer}>
          <Text style={styles.datoEscolarColor}>Nombre</Text>
          <Text style={styles.infoAlumnoColor}>Juan Remiro</Text>
          <Text style={styles.datoEscolarColor}>Legajo</Text>
          <Text style={styles.infoAlumnoColor}>1155993</Text>
          <Text style={styles.datoEscolarColor}>Email</Text>
          <Text style={styles.infoAlumnoColor}>jremiro@uade.edu.ar</Text>
        </View>
      </View>
    </BaseScreen>
  );
};

export default PerfilProfesorPage;
const styles = StyleSheet.create({
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  avatarQRInicio: {
    width: 175,
    height: 175,
  },
  alumnoInformacionContainer: {
    fontFamily: FontFamily.barlowCondensedSemiBold,
    flexDirection: "column",
    paddingHorizontal: 30,
    width: "100%",
    paddingTop: 60,
  },
  datoEscolarColor: {
    color: "#3c58bd",
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  infoAlumnoColor: {
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    paddingBottom: 10,
  },
});

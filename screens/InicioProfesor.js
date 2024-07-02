import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BaseScreen from "../components/BaseComponente";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const InicioProfesorPage = () => {
  return (
    <BaseScreen proviene={"home"} alumno={false}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
          source={require("../assets/ProfesorAvatar.png")}
          contentFit="cover"
          style={styles.avatarQRInicio}
        ></Image>
        <Text style={styles.bienvenidaContainer}>
          <Text style={styles.bienvenida}>{`¡Bienvenido, `}</Text>
          <Text style={styles.nombre}>Jorge!</Text>
        </Text>
      </View>
    </BaseScreen>
  );
};

export default InicioProfesorPage;

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
  materia: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    paddingTop: 15,
  },
});

import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import Component4Icon from "../components/Component4Icon";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PantallaInicioAlumno1 = () => {
  return (
    <View style={styles.pantallaInicioAlumno}>
      <ImageBackground
        style={styles.image17Icon}
        resizeMode="cover"
        source={require("../assets/image-18.png")}
      />
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={32}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage1
        property1DefaultImage1Pro={require("../assets/notify1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={210}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage2
        property1DefaultImage2Pro={require("../assets/perfil.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={298}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <View style={styles.pantallaInicioAlumnoChild} />
      <ImageBackground
        style={styles.imageRemovebgPreview23}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Component4Icon />
      <Text style={[styles.bienvenidoDiegote, styles.edumateFlexBox]}>
        <Text style={styles.bienvenido}>{`¡Bienvenido, `}</Text>
        <Text style={styles.diegote}>Diegote!</Text>
      </Text>
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr5.png")}
      />
      <Text style={[styles.edumate, styles.edumateFlexBox]}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  edumateFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  image17Icon: {
    height: "46.13%",
    width: "216.79%",
    top: "0%",
    right: "-216.54%",
    bottom: "53.87%",
    left: "99.75%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  pantallaInicioAlumnoChild: {
    top: 69,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 3,
    width: 396,
    height: 3,
    opacity: 0.5,
    position: "absolute",
  },
  imageRemovebgPreview23: {
    top: 7,
    left: 326,
    width: 50,
    height: 54,
    position: "absolute",
  },
  bienvenido: {
    color: Color.colorBlack,
  },
  diegote: {
    color: Color.colorDodgerblue,
  },
  bienvenidoDiegote: {
    top: 623,
    left: 44,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.barlowCondensedSemiBold,
  },
  qrIcon: {
    top: 773,
    left: 121,
    width: 60,
    height: 60,
    position: "absolute",
  },
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  edumate: {
    marginLeft: -104.5,
    top: 115,
    left: "50%",
    fontSize: FontSize.size_31xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.sunflowerBold,
  },
  pantallaInicioAlumno: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PantallaInicioAlumno1;

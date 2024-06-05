import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const PantallaInicioAlumno = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.pantallaInicioAlumno, styles.image17IconLayout]}>
      <Image
        style={[styles.image17Icon, styles.image17IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("PantallaInicioAlumno");
        }}
      >
        <Property1DefaultImage
          property1DefaultImageProp={require("../assets/home.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={20}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("CARGA")}>
        <Image
          style={styles.qrIcon1}
          contentFit="cover"
          source={require("../assets/qr.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Notificaciones1")}>
        <Property1DefaultImage1
          property1DefaultImage1Pro={require("../assets/notify1.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={240}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Perfil1")}>
        <Property1DefaultImage2
          property1DefaultImage2Pro={require("../assets/perfil.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={350}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Image
        style={styles.pantallaInicioAlumnoChild}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.qrIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/qr3.png")}
      />
      <View style={styles.pantallaInicioAlumnoItem} />
      <Image
        style={styles.imageRemovebgPreview23}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Image
        style={[styles.removal1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/removal-1.png")}
      />
      <Text style={[styles.bienvenidoDiegote, styles.edumateFlexBox]}>
        <Text style={styles.bienvenido}>{`¡Bienvenido, `}</Text>
        <Text style={styles.diegote}>Usuario!</Text>
      </Text>
      <Text style={[styles.edumate, styles.edumateFlexBox]}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image17IconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    left: 48,
    position: "absolute",
  },
  edumateFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  image17Icon: {
    height: "100%",
    top: "0%",
    right: "0.25%",
    bottom: "0%",
    left: "-0.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pantallaInicioAlumnoChild: {
    marginTop: -202,
    marginLeft: -158.5,
    top: "50%",
    width: 310,
    height: 310,
    left: "50%",
    position: "absolute",
  },
  qrIcon: {
    top: 222,
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  pantallaInicioAlumnoItem: {
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
  removal1Icon: {
    top: 234,
    width: 311,
    height: 311,
  },
  bienvenido: {
    color: Color.colorBlack,
  },
  diegote: {
    color: Color.colorDodgerblue,
  },
  bienvenidoDiegote: {
    top: 623,
    left: 25,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.barlowCondensedSemiBold,
  },
  qrIcon1: {
    top: 773,
    left: 130,
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
    fontSize: FontSize.size_31xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.sunflowerBold,
    left: "50%",
  },
  pantallaInicioAlumno: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
});

export default PantallaInicioAlumno;

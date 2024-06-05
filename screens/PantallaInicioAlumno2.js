import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const PantallaInicioAlumno2 = () => {
  return (
    <View style={[styles.pantallaInicioAlumno, styles.image17IconLayout]}>
      <Image
        style={[styles.image17Icon, styles.image17IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home.png")}
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
      <Image
        style={[
          styles.pantallaInicioAlumnoChild,
          styles.maskGroupIcon1Position,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <View style={styles.pantallaInicioAlumnoItem} />
      <ImageBackground
        style={styles.imageRemovebgPreview23}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Text style={[styles.yaTienesTuContainer, styles.edumatePosition]}>
        <Text style={styles.yaTienesTuContainer1}>
          <Text style={styles.yaTienesTu}>{`¡Ya tienes tu `}</Text>
          <Text style={styles.presente}>Presente!</Text>
        </Text>
      </Text>
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr6.png")}
      />
      <Text style={[styles.edumate, styles.edumatePosition]}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.presente}>MATE</Text>
      </Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group3.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupIcon1Position]}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image17IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  maskGroupIcon1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  edumatePosition: {
    textAlign: "center",
    left: "50%",
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
  },
  pantallaInicioAlumnoChild: {
    marginTop: -156,
    marginLeft: -154.5,
    width: 310,
    height: 310,
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
  yaTienesTu: {
    color: Color.colorBlack,
  },
  presente: {
    color: Color.colorDarkslateblue,
  },
  yaTienesTuContainer1: {
    width: "100%",
  },
  yaTienesTuContainer: {
    marginLeft: -162.5,
    top: 600,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    alignItems: "center",
    width: 326,
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
  edumate: {
    marginLeft: -125.5,
    top: 109,
    fontSize: FontSize.size_41xl,
    letterSpacing: -0.6,
    fontWeight: "700",
    fontFamily: FontFamily.sunflowerBold,
  },
  maskGroupIcon: {
    top: 11,
    left: 21,
    width: 48,
    height: 48,
    position: "absolute",
  },
  maskGroupIcon1: {
    marginTop: -175,
    marginLeft: -174.5,
    width: 350,
    height: 350,
  },
  pantallaInicioAlumno: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
  },
});

export default PantallaInicioAlumno2;

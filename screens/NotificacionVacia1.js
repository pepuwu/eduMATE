import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NotificacionVacia1 = () => {
  return (
    <View style={[styles.notificacionVacia, styles.image18IconLayout]}>
      <Image
        style={[styles.image18Icon, styles.image18IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={styles.notificacionVaciaChild} />
      <View style={[styles.notificacionVaciaItem, styles.notificacionBorder]} />
      <Text style={[styles.notificaciones, styles.edumateFlexBox]}>
        Notificaciones
      </Text>
      <Text style={[styles.noHayNuevas, styles.edumateFlexBox]}>
        No hay nuevas notificaciones
      </Text>
      <View
        style={[styles.notificacionVaciaInner, styles.notificacionBorder]}
      />
      <ImageBackground
        style={styles.imageRemovebgPreview23}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={38}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage1
        property1DefaultImage1Pro={require("../assets/notify.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={216}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage2
        property1DefaultImage2Pro={require("../assets/perfil.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={305}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr5.png")}
      />
      <Text style={[styles.edumate, styles.edumateFlexBox]}>
        <Text style={styles.edumateTxt}>
          <Text style={styles.edu}>edu</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image18IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  notificacionBorder: {
    opacity: 0.5,
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  edumateFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  image18Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  notificacionVaciaChild: {
    top: 95,
    left: 12,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_300,
    width: 368,
    height: 627,
    position: "absolute",
  },
  notificacionVaciaItem: {
    top: 155,
    left: 20,
    width: 355,
  },
  notificaciones: {
    top: 102,
    left: 50,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
  },
  noHayNuevas: {
    top: 375,
    left: 63,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.barlowRegular,
    color: Color.colorGray_400,
    width: 267,
    height: 103,
  },
  notificacionVaciaInner: {
    top: 69,
    left: -1,
    width: 396,
  },
  imageRemovebgPreview23: {
    top: 7,
    left: 326,
    width: 50,
    height: 54,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 11,
    left: 21,
    width: 48,
    height: 48,
    position: "absolute",
  },
  qrIcon: {
    top: 773,
    left: 127,
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
  edumateTxt: {
    width: "100%",
  },
  edumate: {
    marginLeft: -87.5,
    top: 19,
    left: "50%",
    letterSpacing: -0.4,
    fontWeight: "700",
    fontFamily: FontFamily.sunflowerBold,
    display: "flex",
    alignItems: "center",
    width: 170,
    height: 33,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
  },
  notificacionVacia: {
    backgroundColor: Color.colorLightslategray_100,
    flex: 1,
    height: 852,
  },
});

export default NotificacionVacia1;

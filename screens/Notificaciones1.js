import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import Button1 from "../components/Button1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Notificaciones1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.notificaciones, styles.image19IconLayout]}>
      <Image
        style={[styles.image19Icon, styles.image19IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
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
      <View style={styles.notificacionesChild} />
      <Button1
        buttonPosition="absolute"
        buttonWidth="unset"
        buttonTop={158}
        buttonLeft={78}
        buttonHeight="unset"
        onButtonPress={() => navigation.navigate("DetalleNotificacion1")}
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
      <View style={styles.card}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Text style={[styles.cmoEstuvoSu, styles.cmoEstuvoSuFlexBox]}>
            ¿CÓMO ESTUVO SU CLASE?
          </Text>
        </View>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text
            style={[
              styles.completaLaEncuestaSusContainer,
              styles.cmoEstuvoSuFlexBox,
            ]}
          >
            <Text style={styles.cmoEstuvoSuTypo}>COMPLETA LA ENCUESTA:</Text>
            <Text style={styles.susRespuestasNos}>
              Sus respuestas nos ayudan a mejorar las clases.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Urbanist-Bold",
  },
  buttonBtn1: {
    height: 30,
    width: 243,
  },
  image19IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  cmoEstuvoSuFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  image19Icon: {
    height: "100%",
    top: "0%",
    right: "-0.25%",
    bottom: "0%",
    left: "0.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  qrIcon: {
    top: 773,
    left: 127,
    width: 60,
    height: 60,
    position: "absolute",
  },
  notificacionesChild: {
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
  maskGroupIcon: {
    top: 11,
    left: 21,
    width: 48,
    height: 48,
    position: "absolute",
  },
  cmoEstuvoSu: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  frame: {
    top: 9,
    left: 68,
    width: 217,
  },
  cmoEstuvoSuTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  susRespuestasNos: {
    fontFamily: FontFamily.urbanistRegular,
  },
  completaLaEncuestaSusContainer: {
    fontSize: FontSize.size_xs,
    width: 296,
    height: 43,
  },
  frame1: {
    top: 39,
    left: 55,
    width: 306,
  },
  card: {
    top: 81,
    left: 23,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 354,
    height: 118,
    position: "absolute",
  },
  notificaciones: {
    backgroundColor: Color.colorLightslategray_100,
    flex: 1,
    height: 852,
  },
});

export default Notificaciones1;

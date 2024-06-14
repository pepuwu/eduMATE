import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const Login1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login}>
      <ImageBackground
        style={styles.vectorParent}
        resizeMode="cover"
        source={require("../assets/frame5.png")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-41.png")}
        />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.usuario, styles.usuarioTypo]}>Usuario</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.contrasea, styles.usuarioTypo]}>Contraseña</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.vectorGroupLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-49.png")}
          />
          <Text
            onPress={() => navigation.replace("EscaneoScreen")}
            style={[styles.iniciarSesion, styles.login1Text]}
          >{`Iniciar Sesion `}</Text>
        </View>
        <Text
          style={[styles.olvidasteTuContrasea, styles.iniciarSesionFlexBox]}
        >
          ¿Olvidaste tu contraseña?
        </Text>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      </ImageBackground>
      <Text style={[styles.edumate, styles.login1Typo]}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 42,
    width: 302,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    left: 86,
    position: "absolute",
  },
  usuarioTypo: {
    opacity: 0.6,
    left: 143,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  maskGroupPosition: {
    left: 92,
    position: "absolute",
  },
  vectorGroupLayout: {
    height: 32,
    width: 149,
    position: "absolute",
  },
  login1Text: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iniciarSesionFlexBox: {
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
  },
  login1Typo: {
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 195,
    left: 75,
    borderRadius: Border.br_31xl,
    width: 351,
    height: 485,
    position: "absolute",
  },
  frameItem: {
    top: 377,
  },
  usuario: {
    top: 386,
  },
  frameInner: {
    top: 451,
  },
  contrasea: {
    top: 460,
  },
  maskGroupIcon: {
    top: 379,
    width: 38,
    height: 38,
  },
  maskGroupIcon1: {
    top: 455,
    width: 34,
    height: 33,
  },
  rectangleIcon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
  },
  iniciarSesion: {
    top: 4,
    left: 18,
    fontFamily: FontFamily.varelaRoundRegular,
    width: 136,
    height: 21,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    position: "absolute",
    fontSize: FontSize.size_xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorGroup: {
    top: 620,
    left: 172,
  },
  olvidasteTuContrasea: {
    top: 515,
    left: 175,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGainsboro_100,
  },
  login1: {
    marginLeft: -60,
    top: 270,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 113,
    height: 47,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    top: -13,
    left: -40,
    width: 497,
    height: 920,
    position: "absolute",
  },
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  edumate: {
    marginLeft: -102.5,
    top: 70,
    fontSize: FontSize.size_31xl,
    letterSpacing: -0.5,
    fontFamily: FontFamily.sunflowerBold,
  },
  login: {
    backgroundColor: Color.colorLightslategray_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Login1;

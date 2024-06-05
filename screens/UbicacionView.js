import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import Button1 from "../components/Button1";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const UbicacionView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ubicacionView}>
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require("../assets/fondo.png")}
      />
      <Image
        style={[styles.image18Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={styles.ubicacionViewChild} />
      <ImageBackground
        style={styles.imageRemovebgPreview23}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("PantallaInicioAlumno1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
      </Pressable>
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={772}
        property1DefaultIconLeft={29}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage1
        property1DefaultImage1Pro={require("../assets/notify1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={772}
        property1DefaultIconLeft={207}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage2
        property1DefaultImage2Pro={require("../assets/perfil.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={772}
        property1DefaultIconLeft={295}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr6.png")}
      />
      <Image
        style={[styles.ubicacionViewItem, styles.maskGroupIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-73.png")}
      />
      <View style={styles.datosUser}>
        <Text style={[styles.diegoteMaradona, styles.diegoteMaradonaFlexBox]}>
          Diegote Maradona
        </Text>
        <Text
          style={[styles.claseTrabajoIntegrador, styles.diegoteMaradonaFlexBox]}
        >{`Clase: Trabajo Integrador Final  
Fecha: 1 3/03/2025`}</Text>
      </View>
      <Button1
        buttonPosition="absolute"
        buttonWidth="unset"
        buttonTop={649}
        buttonLeft="50%"
        buttonHeight="unset"
      />
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBtn: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Urbanist-Bold",
  },
  buttonBtn1: {
    marginLeft: -114.5,
    height: 42,
    width: 219,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  maskGroupIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  diegoteMaradonaFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  fondoIcon: {
    top: 68,
    left: 0,
    width: 392,
    height: 700,
    position: "absolute",
  },
  image18Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ubicacionViewChild: {
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
  maskGroup: {
    left: 21,
    top: 11,
    width: 48,
    height: 48,
    position: "absolute",
  },
  qrIcon: {
    top: 772,
    left: 118,
    width: 60,
    height: 60,
    position: "absolute",
  },
  ubicacionViewItem: {
    marginTop: -160,
    marginLeft: -159.5,
    width: 320,
    height: 320,
  },
  diegoteMaradona: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  claseTrabajoIntegrador: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.urbanistRegular,
  },
  datosUser: {
    top: 102,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_300,
    width: 365,
    paddingLeft: Padding.p_56xl,
    paddingRight: Padding.p_smi,
    position: "absolute",
  },
  maskGroupIcon: {
    marginTop: -118,
    marginLeft: -117.5,
    width: 236,
    height: 236,
  },
  ubicacionView: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default UbicacionView;

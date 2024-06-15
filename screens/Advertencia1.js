import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Button1 from "../components/Button1";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Advertencia1 = () => {
  return (
    <View style={styles.advertencia}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <View style={[styles.advertenciaChild, styles.advertenciaBorder]} />
      <Text style={styles.noSeEncuentra}>
        No se encuentra en el área donde está ubicado el aula. Si no está dentro
        de el, no podrá dar el presente
      </Text>
      <Text style={[styles.advertencia1, styles.advertencia1FlexBox]}>
        Advertencia
      </Text>
      <View style={[styles.advertenciaItem, styles.advertenciaBorder]} />
      <ImageBackground
        style={styles.imageRemovebgPreview25}
        resizeMode="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr6.png")}
      />
      <Button1
        buttonPosition="absolute"
        buttonWidth="unset"
        buttonTop={513}
        buttonLeft={100}
        buttonHeight="unset"
      />
      <View style={styles.datosUser}>
        <Text style={[styles.diegoteMaradona, styles.advertencia1FlexBox]}>
          Diegote Maradona
        </Text>
        <Text
          style={[styles.claseTrabajoIntegrador, styles.advertencia1FlexBox]}
        >{`Clase: Trabajo Integrador Final  
Fecha: 1 3/03/2025`}</Text>
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
    height: 38,
    width: 198,
  },
  advertenciaBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  advertencia1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  image19Icon: {
    height: "100%",
    width: "100.25%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "-0.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  advertenciaChild: {
    top: 262,
    borderRadius: Border.br_31xl,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 351,
    height: 327,
    backgroundColor: Color.colorGainsboro_300,
    left: 21,
  },
  noSeEncuentra: {
    top: 356,
    left: 60,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 273,
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  advertencia1: {
    marginLeft: -79.5,
    top: 297,
    left: "50%",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  advertenciaItem: {
    top: 69,
    left: -1,
    borderColor: Color.colorWhite,
    borderTopWidth: 3,
    width: 396,
    height: 3,
    opacity: 0.5,
  },
  imageRemovebgPreview25: {
    top: 7,
    left: 326,
    width: 50,
    height: 54,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 11,
    width: 48,
    height: 48,
    left: 21,
    position: "absolute",
  },
  qrIcon: {
    top: 773,
    left: 123,
    width: 60,
    height: 60,
    position: "absolute",
  },
  diegoteMaradona: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  claseTrabajoIntegrador: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
  },
  datosUser: {
    top: 102,
    left: 14,
    borderRadius: Border.br_mini,
    width: 365,
    paddingLeft: Padding.p_56xl,
    paddingRight: Padding.p_smi,
    backgroundColor: Color.colorGainsboro_300,
    position: "absolute",
  },
  advertencia: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Advertencia1;

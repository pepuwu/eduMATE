import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Advertencia = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.advertencia}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <View style={styles.datosUser}>
        <Text style={styles.diegoteMaradona}>Diegote Maradona</Text>
        <Text style={[styles.legajo1234567Dni, styles.noSeEncuentraTypo]}>
          Legajo 1234567 DNI 44870883
        </Text>
      </View>
      <View style={[styles.advertenciaChild, styles.advertenciaBorder]} />
      <Text style={[styles.noSeEncuentra, styles.noSeEncuentraTypo]}>
        No se encuentra conectado a la red del establecimiento. Si no está
        conectado a esta red no podrá escanear el QR
      </Text>
      <Text style={[styles.advertencia1, styles.advertencia1Position]}>
        Advertencia
      </Text>
      <View style={[styles.advertenciaItem, styles.advertenciaBorder]} />
      <Image
        style={styles.imageRemovebgPreview25}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("PantallaInicioAlumno")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </Pressable>
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr1.png")}
      />
      <Button1
        descargar="VOLVER A INTENTAR"
        buttonPosition="absolute"
        buttonWidth={198}
        buttonTop={513}
        buttonLeft={100}
        buttonHeight={38}
        descargarTop="24.74%"
        descargarLeft="11.11%"
        descargarFontSize={16}
        descargarFontWeight="700"
        descargarFontFamily="Urbanist-Bold"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noSeEncuentraTypo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  advertenciaBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  advertencia1Position: {
    left: "50%",
    textAlign: "left",
  },
  image19Icon: {
    width: "100.25%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "-0.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  diegoteMaradona: {
    top: 18,
    left: 91,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  legajo1234567Dni: {
    marginLeft: -105.5,
    top: 51,
    left: "50%",
    textAlign: "left",
  },
  datosUser: {
    top: 102,
    left: 14,
    borderRadius: Border.br_mini,
    width: 365,
    height: 90,
    backgroundColor: Color.colorGainsboro_300,
    position: "absolute",
  },
  advertenciaChild: {
    top: 262,
    borderRadius: Border.br_31xl,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 351,
    height: 327,
    left: 21,
    backgroundColor: Color.colorGainsboro_300,
  },
  noSeEncuentra: {
    top: 356,
    left: 60,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 273,
  },
  advertencia1: {
    marginLeft: -79.5,
    top: 297,
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
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
  icon: {
    height: "100%",
    width: "100%",
  },
  maskGroup: {
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
  advertencia: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Advertencia;

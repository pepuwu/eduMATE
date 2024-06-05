import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ScanView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scanView}>
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
      <View style={styles.scanViewChild} />
      <Image
        style={styles.imageRemovebgPreview23}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.replace("PantallaInicioAlumno")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.replace("PantallaInicioAlumno");
        }}
      >
        <Property1DefaultImage
          property1DefaultImageProp={require("../assets/home.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={772}
          property1DefaultIconLeft={20}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Notificaciones1")}>
        <Property1DefaultImage1
          property1DefaultImage1Pro={require("../assets/notify1.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={772}
          property1DefaultIconLeft={240}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Perfil1")}>
        <Property1DefaultImage2
          property1DefaultImage2Pro={require("../assets/perfil.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={772}
          property1DefaultIconLeft={350}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable>
        <Image
          style={styles.qrIcon}
          contentFit="cover"
          source={require("../assets/qr1.png")}
        />
      </Pressable>
      <Image
        style={[styles.scanViewItem, styles.qrIcon1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.qrIcon1, styles.qrIcon1Position]}
        contentFit="cover"
        source={require("../assets/qr2.png")}
      />
      <Text style={[styles.escanaElQr, styles.escanaElQrFlexBox]}>
        Escanéa el QR
      </Text>
      <View style={styles.datosUser}>
        <Text style={[styles.diegoteMaradona, styles.escanaElQrFlexBox]}>
          Diegote Maradona
        </Text>
        <Text style={[styles.legajo1234567Dni, styles.escanaElQrFlexBox]}>
          Legajo 1234567 DNI 3123
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  qrIcon1Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  escanaElQrFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
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
  scanViewChild: {
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
    left: 130,
    width: 60,
    height: 60,
    position: "absolute",
  },
  scanViewItem: {
    marginTop: -190,
    marginLeft: -190.5,
    width: 380,
    height: 380,
    left: "50%",
  },
  qrIcon1: {
    marginTop: -111,
    marginLeft: -99.5,
    width: 200,
    height: 200,
    left: "50%",
    overflow: "hidden",
  },
  escanaElQr: {
    top: "580px",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    left: "135px",
  },
  diegoteMaradona: {
    top: 18,
    left: 91,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  legajo1234567Dni: {
    marginLeft: -105.5,
    top: 51,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.urbanistRegular,
    left: "50%",
  },
  datosUser: {
    top: 102,
    left: 14,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_300,
    width: 365,
    height: 90,
    position: "absolute",
  },
  scanView: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ScanView;

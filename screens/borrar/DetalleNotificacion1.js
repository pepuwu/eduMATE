import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import Button1 from "../../components/Button1";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const DetalleNotificacion1 = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdown1Open, setFrameDropdown1Open] = useState(false);
  const [frameDropdown1Value, setFrameDropdown1Value] = useState();
  const [frameDropdown2Open, setFrameDropdown2Open] = useState(false);
  const [frameDropdown2Value, setFrameDropdown2Value] = useState();

  return (
    <View style={[styles.detalleNotificacion, styles.image20IconLayout]}>
      <Image
        style={[styles.image20Icon, styles.image20IconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View
        style={[styles.detalleNotificacionChild, styles.rectangleIconLayout]}
      />
      <View style={[styles.detalleNotificacionItem, styles.detalleBorder]} />
      <Text style={styles.detalle}>Detalle</Text>
      <View style={[styles.detalleNotificacionInner, styles.detalleBorder]} />
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
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={styles.cmoEstuvoLa}>¿Cómo estuvo la clase?</Text>
      <Text style={[styles.cmoEvaluarasAl, styles.del1AlTypo]}>
        ¿Cómo evaluarías al docente en la clase de hoy?
      </Text>
      <Text
        style={[styles.del1Al, styles.del1AlTypo]}
      >{`Del 1 al 10, ¿Cómo clasificas el 
material que dictó el docente?`}</Text>
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
      <Button1
        buttonPosition="absolute"
        buttonWidth="unset"
        buttonTop={646}
        buttonLeft={119}
        buttonHeight="unset"
      />
      <View style={[styles.wrapper, styles.frameLayout]}>
        <DropDownPicker
          open={frameDropdownOpen}
          setOpen={setFrameDropdownOpen}
          value={frameDropdownValue}
          setValue={setFrameDropdownValue}
          items={[]}
        />
      </View>
      <View style={[styles.container, styles.frameLayout]}>
        <DropDownPicker
          open={frameDropdown1Open}
          setOpen={setFrameDropdown1Open}
          value={frameDropdown1Value}
          setValue={setFrameDropdown1Value}
          items={[]}
        />
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <DropDownPicker
          open={frameDropdown2Open}
          setOpen={setFrameDropdown2Open}
          value={frameDropdown2Value}
          setValue={setFrameDropdown2Value}
          items={[]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBtn: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  buttonBtn1: {
    height: 62,
    width: 155,
  },
  image20IconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  detalleBorder: {
    opacity: 0.5,
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  del1AlTypo: {
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 290,
    position: "absolute",
  },
  image20Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  detalleNotificacionChild: {
    top: 95,
    left: 12,
    backgroundColor: Color.colorGainsboro_300,
    width: 368,
    height: 627,
  },
  detalleNotificacionItem: {
    top: 155,
    left: 20,
    width: 355,
  },
  detalle: {
    top: 106,
    left: 59,
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    justifyContent: "center",
    width: 274,
    height: 47,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  detalleNotificacionInner: {
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
  rectangleIcon: {
    top: 203,
    left: 25,
    width: 344,
    height: 463,
  },
  cmoEstuvoLa: {
    top: 225,
    left: 50,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  cmoEvaluarasAl: {
    top: 339,
    left: 42,
    width: 329,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
  },
  del1Al: {
    top: 488,
    left: 43,
    fontSize: FontSize.size_4xl,
  },
  qrIcon: {
    top: 773,
    left: 127,
    width: 60,
    height: 60,
    position: "absolute",
  },
  wrapper: {
    top: 418,
    left: 51,
  },
  container: {
    top: 578,
    left: 52,
  },
  frame: {
    top: 269,
    left: 55,
  },
  detalleNotificacion: {
    backgroundColor: Color.colorLightslategray_100,
    flex: 1,
    height: 852,
  },
});

export default DetalleNotificacion1;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import Button1 from "../components/Button1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DetalleNotificacion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detalleNotificacion}>
      <Image
        style={[styles.image20Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View
        style={[styles.detalleNotificacionChild, styles.rectangleIconLayout]}
      />
      <View style={[styles.detalleNotificacionItem, styles.detalleBorder]} />
      <Text style={styles.detalle}>Detalle</Text>
      <View style={[styles.detalleNotificacionInner, styles.detalleBorder]} />
      <Image
        style={styles.imageRemovebgPreview23}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-2-3.png")}
      />
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("Notificaciones")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={styles.cmoEstuvoLa}>¿Cómo estuvo la clase?</Text>
      <Text style={[styles.cmoEvaluarasAl, styles.del1AlTypo]}>
        ¿Cómo evaluarías al  docente en la clase de hoy?
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
        source={require("../assets/qr.png")}
      />
      <Button1
        descargar="ENVIAR"
        buttonPosition="absolute"
        buttonWidth={155}
        buttonTop={646}
        buttonLeft={119}
        buttonHeight={62}
        descargarTop="18.39%"
        descargarLeft="25.16%"
        descargarFontSize={30}
        descargarFontWeight="600"
        descargarFontFamily="BarlowCondensed-SemiBold"
      />
      <View style={[styles.parent, styles.frameLayout]}>
        <Text style={[styles.text, styles.textTypo]}>▼</Text>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
          <View style={styles.frameItem} />
        </View>
      </View>
      <View style={[styles.group, styles.frameLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>▼</Text>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
          <View style={styles.frameItem} />
        </View>
      </View>
      <View style={[styles.container, styles.frameLayout]}>
        <Text style={[styles.text2, styles.textTypo]}>▼</Text>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.frameChild} />
          <View style={styles.frameItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
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
    width: 290,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    width: 11,
    color: Color.colorWhite,
    fontFamily: FontFamily.varelaRoundRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -8,
    textAlign: "left",
    position: "absolute",
  },
  image20Icon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  maskGroup: {
    left: 21,
    top: 11,
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
  text: {
    left: 320,
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSnow,
    width: 282,
    height: 32,
  },
  frameItem: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    width: 28,
    height: 32,
  },
  frame: {
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  parent: {
    top: 418,
    left: 51,
    height: 32,
  },
  text1: {
    left: 321,
  },
  group: {
    top: 578,
    left: 52,
    height: 32,
  },
  text2: {
    left: 324,
  },
  container: {
    top: 269,
    left: 55,
    height: 32,
  },
  detalleNotificacion: {
    backgroundColor: Color.colorLightslategray_100,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default DetalleNotificacion;

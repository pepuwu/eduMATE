import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import Component5Icon from "../components/Component5Icon";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const Perfil1 = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.perfil, styles.perfilLayout]}>
      <Image
        style={[styles.image17Icon, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={styles.perfilChild} />
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
      <Component5Icon />
      <Pressable
        onPress={() => {
          navigation.replace("PantallaInicioAlumno");
        }}
      >
        <Property1DefaultImage
          property1DefaultImageProp={require("../assets/home.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={20}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("ScanView")}>
        <Image
          style={styles.qrIcon}
          contentFit="cover"
          source={require("../assets/qr.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Notificaciones1")}>
        <Property1DefaultImage1
          property1DefaultImage1Pro={require("../assets/notify1.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={240}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Pressable>
        <Property1DefaultImage2
          property1DefaultImage2Pro={require("../assets/perfil1.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={350}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>

      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr.png")}
      />
      <Text style={styles.edumate}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.tecnicaturaUniversitariaEn}>
          Tecnicatura Universitaria en Desarrollo de Software
        </Text>
        <Text style={[styles.misCarreras1, styles.misCarreras1Typo]}>
          Mis Carreras(1)
        </Text>
        <Text style={[styles.totalDeMaterias, styles.misCarreras1Typo]}>
          Total de materias aprobadas
        </Text>
        <Text
          style={[styles.diegoteMaradona, styles.textTypo]}
        >{`Diegote Maradona `}</Text>
        <Text style={[styles.nombre, styles.emailTypo]}>{`Nombre  `}</Text>
        <Text style={[styles.legajo, styles.emailTypo]}>Legajo</Text>
        <Text style={[styles.text, styles.textTypo]}>1234567</Text>
        <Text style={styles.text1}>10</Text>
        <Text style={[styles.eldiegouadeeduar, styles.textTypo]}>
          eldiego@uade.edu.ar
        </Text>
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    height: 407,
    position: "absolute",
  },
  misCarreras1Typo: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: 33,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    height: 45,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistRegular,
    left: 33,
    position: "absolute",
  },
  emailTypo: {
    height: 57,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: 33,
    fontWeight: "700",
    position: "absolute",
  },
  image17Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  perfilChild: {
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
    width: 48,
    height: 48,
    left: 21,
    position: "absolute",
  },
  qrIcon: {
    top: 773,
    left: 130,
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
  edumate: {
    marginLeft: -103.5,
    top: 4,
    left: "50%",
    fontSize: FontSize.size_31xl,
    letterSpacing: -0.5,
    fontFamily: FontFamily.sunflowerBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_200,
    width: 349,
  },
  tecnicaturaUniversitariaEn: {
    top: 345,
    width: 311,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistRegular,
    left: 33,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  misCarreras1: {
    top: 306,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsBold,
  },
  totalDeMaterias: {
    top: 239,
    fontSize: FontSize.size_xl,
    width: 323,
  },
  diegoteMaradona: {
    top: 54,
    width: 213,
  },
  nombre: {
    top: 6,
    display: "flex",
    alignItems: "center",
    width: 112,
  },
  legajo: {
    top: 84,
    width: 92,
  },
  text: {
    top: 124,
    width: 100,
  },
  text1: {
    top: 270,
    width: 23,
    height: 30,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistRegular,
    left: 33,
    position: "absolute",
  },
  eldiegouadeeduar: {
    top: 198,
    width: 244,
  },
  email: {
    top: 163,
    width: 72,
  },
  rectangleParent: {
    top: 342,
    width: 356,
    left: 21,
  },
  perfil: {
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    height: 852,
  },
});

export default Perfil1;

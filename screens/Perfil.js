import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1DefaultImage from "../components/Property1DefaultImage";
import Property1DefaultImage1 from "../components/Property1DefaultImage1";
import Property1DefaultImage2 from "../components/Property1DefaultImage2";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <Image
        style={styles.image17Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Image
        style={styles.perfilChild}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.perfilItem} />
      <Image
        style={styles.imageRemovebgPreview23}
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
        style={styles.perfilInner}
        contentFit="cover"
        source={require("../assets/ellipse-72.png")}
      />
      <Image
        style={styles.qrIcon}
        contentFit="cover"
        source={require("../assets/qr4.png")}
      />
      <Image
        style={styles.removal1Icon}
        contentFit="cover"
        source={require("../assets/removal-11.png")}
      />
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={34}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage1
        property1DefaultImage1Pro={require("../assets/notify1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={212}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Property1DefaultImage2
        property1DefaultImage2Pro={require("../assets/perfil1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={300}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Image
        style={styles.qrIcon1}
        contentFit="cover"
        source={require("../assets/qr.png")}
      />
      <Text style={styles.edumate}>
        <Text style={styles.edu}>edu</Text>
        <Text style={styles.mate}>MATE</Text>
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <Text style={styles.nombre}>{`Nombre  `}</Text>
        </View>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={styles.text}>10</Text>
          </View>
          <View style={styles.frame3}>
            <Text style={styles.tecnicaturaUniversitariaEn}>
              Tecnicatura Universitaria en Desarrollo de Software
            </Text>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.misCarreras1}>Mis Carreras(1)</Text>
          </View>
          <View style={styles.frame5}>
            <View style={styles.frame6}>
              <Text style={styles.diegoteMaradona}>{`Diegote Maradona `}</Text>
              <Text style={styles.legajo}>Legajo</Text>
            </View>
            <View style={styles.frame7}>
              <View style={styles.frame8}>
                <Text style={styles.text1}>1234567</Text>
                <Text style={styles.email}>Email</Text>
              </View>
              <View style={styles.frame9}>
                <Text style={styles.eldiegouadeeduar}>eldiego@uade.edu.ar</Text>
                <Text style={styles.totalDeMaterias}>
                  Total de materias aprobadas
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image17Icon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  perfilChild: {
    position: "absolute",
    top: 65,
    left: 142,
    width: 120,
    height: 120,
  },
  perfilItem: {
    position: "absolute",
    top: 69,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 3,
    width: 396,
    height: 3,
    opacity: 0.5,
  },
  imageRemovebgPreview23: {
    position: "absolute",
    top: 7,
    left: 326,
    width: 50,
    height: 54,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  maskGroup: {
    position: "absolute",
    left: 21,
    top: 11,
    width: 48,
    height: 48,
  },
  perfilInner: {
    position: "absolute",
    top: 132,
    left: 99,
    width: 193,
    height: 187,
  },
  qrIcon: {
    position: "absolute",
    marginTop: -294,
    marginLeft: -84.5,
    top: "50%",
    left: "50%",
    width: 170,
    height: 170,
    overflow: "hidden",
  },
  removal1Icon: {
    position: "absolute",
    top: 132,
    left: 99,
    width: 194,
    height: 194,
  },
  qrIcon1: {
    position: "absolute",
    top: 773,
    left: 123,
    width: 60,
    height: 60,
  },
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  edumate: {
    position: "absolute",
    marginLeft: -101.5,
    top: 70,
    left: "50%",
    fontSize: FontSize.size_31xl,
    letterSpacing: -0.5,
    fontWeight: "700",
    fontFamily: FontFamily.sunflowerBold,
    textAlign: "center",
  },
  nombre: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 112,
    height: 57,
    marginLeft: 33,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_200,
    width: 349,
    height: 407,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 6,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 23,
    height: 30,
  },
  frame2: {
    position: "absolute",
    top: 216,
    left: 0,
    width: 56,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  tecnicaturaUniversitariaEn: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 311,
  },
  frame3: {
    position: "absolute",
    top: 291,
    left: 0,
    width: 365,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  misCarreras1: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame4: {
    position: "absolute",
    top: 252,
    left: 0,
    width: 207,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  diegoteMaradona: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 213,
    height: 45,
    marginLeft: 33,
  },
  legajo: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 92,
    height: 57,
    marginLeft: 33,
    marginTop: -15,
  },
  frame6: {
    width: 246,
    height: 87,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 100,
    height: 45,
    marginLeft: 33,
  },
  email: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 72,
    height: 57,
    marginLeft: 33,
    marginTop: -6,
  },
  frame8: {
    width: 133,
    height: 96,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  eldiegouadeeduar: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 244,
    height: 45,
    marginLeft: 33,
  },
  totalDeMaterias: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 323,
    height: 30,
    marginLeft: 33,
    marginTop: -4,
  },
  frame9: {
    width: 356,
    height: 71,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -22,
  },
  frame7: {
    width: 356,
    height: 145,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -17,
  },
  frame5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 356,
    height: 215,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame1: {
    position: "absolute",
    top: 54,
    left: 0,
    width: 365,
    height: 343,
    overflow: "hidden",
  },
  frameParent: {
    position: "absolute",
    top: 342,
    left: 21,
    width: 356,
    height: 407,
  },
  perfil: {
    position: "relative",
    backgroundColor: Color.colorLightslategray_300,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Perfil;

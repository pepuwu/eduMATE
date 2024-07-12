import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { Image } from "expo-image";
import BaseScreen from "../components/BaseComponente";

const PerfilScreen = () => {
  return (
    <BaseScreen proviene={"profile"}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontFamily: FontFamily.sunflowerBold,
            fontSize: FontSize.size_21xl,
            paddingTop: 60,
            paddingBottom: 25,
          }}
        >
          <Text style={styles.edu}>edu</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
        <Image
          source={require("../assets/component-5.png")}
          contentFit="cover"
          style={styles.avatarQRInicio}
        ></Image>
        <View style={styles.alumnoInformacionContainer}>
          <Text style={styles.datoEscolarColor}>Nombre</Text>
          <Text style={styles.infoAlumnoColor}>Juan Esteban</Text>
          <Text style={styles.datoEscolarColor}>Legajo</Text>
          <Text style={styles.infoAlumnoColor}>1155993</Text>
          <Text style={styles.datoEscolarColor}>Email</Text>
          <Text style={styles.infoAlumnoColor}>jesteban@uade.edu.ar</Text>
          <Text style={styles.datoEscolarColor}>
            Total De Materias aprobadas
          </Text>
          <Text style={styles.infoAlumnoColor}>5</Text>
          <Text style={styles.datoEscolarColor}>Mis carreras(1)</Text>
          <Text style={styles.infoAlumnoColor}>
            Tecnicatura universitaria en desarrollo de software
          </Text>
        </View>
      </View>
    </BaseScreen>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  avatarQRInicio: {
    width: 175,
    height: 175,
  },
  alumnoInformacionContainer: {
    fontFamily: FontFamily.barlowCondensedSemiBold,
    flexDirection: "column",
    paddingHorizontal: 30,
    width: "100%",
    paddingTop: 30,
    justifyContent: "center",
  },
  datoEscolarColor: {
    color: "#3c58bd",
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  infoAlumnoColor: {
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    paddingBottom: 10,
  },
});

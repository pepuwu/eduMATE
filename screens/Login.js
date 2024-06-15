import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import fondoLogin from "../assets/fondoLogin.png";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

const theme = {
  colors: { primary: "white" },
  rippleColor: "red",
};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={fondoLogin}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontFamily: FontFamily.sunflowerBold,
            fontSize: FontSize.size_31xl,
            paddingTop: 80,
            paddingBottom: 50,
          }}
        >
          <Text style={styles.edu}>edu</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
        <View style={styles.recuadroGris}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputText}>
            <TextInput
              label="Usuario"
              activeUnderlineColor="white"
              style={{ backgroundColor: "#898989", height: 55 }}
            />
            <TextInput
              label="Contraseña"
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
              activeUnderlineColor="white"
              style={{ backgroundColor: "#898989", height: 55 }}
            />
            <Text style={{ alignSelf: "center", fontSize: 12, color: "white" }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.replace("InicioAlumnoScreen");
            }}
          >
            <View style={styles.iniciarButton}>
              <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  edu: {
    color: Color.colorFloralwhite,
  },
  mate: {
    color: Color.colorSkyblue,
  },
  loginText: {
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  recuadroGris: {
    width: "90%",
    height: 550,
    padding: 40,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(128, 128, 128, 0.65)",
    borderRadius: 40,
    justifyContent: "space-between",
  },
  inputText: {
    width: "100%",
    height: 180,
    justifyContent: "space-between",
    rippleColor: "red",
    marginBottom: 50,
  },
  iniciarButton: {
    height: 40,
    width: 150,
    backgroundColor: "#3290bb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.barlowRegular,
    fontWeight: "600",
    color: "white",
  },
});

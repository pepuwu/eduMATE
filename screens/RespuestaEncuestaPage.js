import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import fondoDegradado from "../assets/fondoDegradado.png";
import { useNavigation, useRoute } from "@react-navigation/core";

const RespComponent = ({ title }) => {
  return (
    <View style={{ paddingTop: 50, width: "100%", alignItems: "center" }}>
      <Text
        style={{
          alignSelf: "flex-start",
          fontWeight: "700",
          fontSize: 18,
          paddingHorizontal: 24,
        }}
      >
        {title}
      </Text>
      <View style={styles.contenedorTexto}>
        <TextInput
          style={{ marginLeft: 10, maxWidth: "80%" }}
          placeholder="Respuesta"
        ></TextInput>
        <View style={styles.botonFinalAzul}>
          <Image
            source={require("../assets/check.png")}
            style={{
              height: 22,
              width: 22,
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const RespuestaPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { index, removeFunction } = route.params;
  return (
    <ImageBackground source={fondoDegradado} style={styles.ImageBackground}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Detalle</Text>
        <View style={styles.encuestaContainer}>
          <RespComponent title={"¿Cómo estuvo la clase?"} />
          <RespComponent
            title={"¿Cómo evaluarías al docente en la clase de hoy?"}
          />
          <RespComponent
            title={
              "Del 1 al 10. ¿Cómo clasificas el material que dictó el docente?"
            }
          />
          <RespComponent title={"¿Algún punto de mejora?"} />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                removeFunction(index);
                Alert.alert("Gracias por tu respuesta");
              }}
              style={styles.button}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RespuestaPage;

const styles = StyleSheet.create({
  ImageBackground: { flex: 1, width: "100%", height: "100%" },
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
  encuestaContainer: {
    width: "90%",
    height: "75%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    flexDirection: "column",
  },
  headerText: {
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  contenedorTexto: {
    width: "90%",
    height: 45,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botonFinalAzul: {
    alignSelf: "flex-end",
    backgroundColor: "#0169bf",
    height: 45,
    width: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0169bf",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
  },
});

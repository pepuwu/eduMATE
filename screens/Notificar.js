import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const teacher1 = require("../assets/teacher1.png");
const teacher2 = require("../assets/teacher2.png");
const teacher3 = require("../assets/teacher3.png");

const NotificacionNueva = ({ path }) => {
  return (
    <View style={styles.cardNoti}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 68,
            width: 68,
            backgroundColor: "#3b87cb",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Image source={path} style={{ width: 66, height: 66 }}></Image>
        </View>
        <View style={{ alignItems: "flex-start", width: "80%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "95%",
            }}
          >
            <Text
              style={{
                color: "#0d3873",
                paddingTop: 10,
                marginBottom: 5,
                fontSize: 15,
              }}
            >
              JUAN CARLOS - ÁLGEBRA
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>X</Text>
          </View>
          <Text style={styles.titleNoti}>¿CÓMO ESTUVO SU CLASE?</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "70%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "500" }}>COMPLETA LA ENCUESTA: </Text>
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            Sus respuestas nos ayudan a mejorar las clases
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            height: 50,
            width: 50,
            backgroundColor: "#0169bf",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "800", fontSize: 15 }}>
            {">"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificarScreen = () => {
  return (
    <BaseScreen proviene={"notify"}>
      <View style={{ height: 100 }}></View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NotificacionNueva path={teacher1}></NotificacionNueva>
          <NotificacionNueva path={teacher2}></NotificacionNueva>
          <NotificacionNueva path={teacher3}></NotificacionNueva>
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default NotificarScreen;

const styles = StyleSheet.create({
  cardNoti: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 400,
    height: 160,
    alignItems: "center",
    flexDirection: "column",
    marginTop: 8,
  },
  titleNoti: {
    fontSize: 18,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "bold",
  },
  encuestaButton: {
    height: 32,
    width: 260,
    backgroundColor: "#0169bf",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.barlowRegular,
    fontWeight: "700",
    color: "white",
  },
});

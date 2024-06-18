import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BaseScreen from "../components/BaseComponente";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const NotificarScreen = () => {
  return (
    <BaseScreen proviene={"notify"}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 110,
        }}
      >
        <View style={styles.cardNoti}>
          <Text style={styles.titleNoti}>¿CÓMO ESTUVO SU CLASE?</Text>
          <Text style={{ paddingBottom: 5, fontWeight: 300, fontSize: 12 }}>
            Tu opinión nos importa.
          </Text>
          <View style={styles.encuestaButton}>
            <Text style={styles.buttonText}>Completa la encuesta</Text>
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default NotificarScreen;

const styles = StyleSheet.create({
  cardNoti: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 380,
    height: 120,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleNoti: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    paddingTop: 10,
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

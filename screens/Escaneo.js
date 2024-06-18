import React, { useEffect, useRef, useState } from "react";
import BaseScreen from "../components/BaseComponente";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { CameraView } from "expo-camera";
import { useNavigation } from "@react-navigation/core";
import * as Location from "expo-location";
import { postPresente } from "../servicios/serviciosGenerales";
import { useScanner } from "../ScannerContext";

const EscaneoScreen = () => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const { launchScanner } = useScanner();
  const [presente, isPresente] = useState(false);

  useEffect(() => {
    const getPermisos = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permiso denegado");
        return;
      }

      if (location === null) {
        getLocacion();
      }
    };

    getPermisos();
  }, []);

  const getLocacion = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low,
    });
    setLocation(currentLocation);
  };

  const handleScan = async (data) => {
    try {
      const response = await postPresente(
        data,
        location.coords.latitude,
        location.coords.longitude
      );
      if (response === 200) {
        console.log("Presente exitoso");
        isPresente(true);
      } else {
        console.log("Error en el presente");
      }
    } catch (error) {
      console.error("Error durante el scan:", error);
    } finally {
      setIsScanning(false);
    }
  };

  const handlepress = () => {
    launchScanner(handleScan);
  };

  return (
    <BaseScreen proviene={"qr"}>
      {!presente ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            paddingTop: 110,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.size_3xl,
              fontFamily: FontFamily.poppinsBold,
              fontWeight: "700",
              textAlign: "left",
              color: Color.colorBlack,
            }}
          >
            Juan Esteban
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: FontFamily.urbanistRegular,
            }}
          >
            Legajo 1234567
          </Text>
          <View style={{ paddingTop: 75 }}>
            <Pressable onPress={handlepress}>
              <Image
                style={{
                  width: 380,
                  height: 380,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                contentFit="cover"
                source={require("../assets/ElipseAzul.png")}
              >
                <Image
                  contentFit="cover"
                  source={require("../assets/qr2.png")}
                  style={{ width: 250, height: 250 }}
                ></Image>
                <Text style={styles.escaneaQR}>Escanea el QR</Text>
              </Image>
            </Pressable>
          </View>
        </View>
      ) : (
        <Text>Presente dado</Text>
      )}
    </BaseScreen>
  );
};

export default EscaneoScreen;

const styles = StyleSheet.create({
  escaneaQR: {
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "center",
    paddingTop: 4,
  },
  datosUser: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_300,
    width: 365,
    height: 90,
  },
});

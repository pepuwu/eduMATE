import React, { useEffect, useRef, useState } from "react";
import BaseScreen from "../components/BaseComponente";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { CameraView } from "expo-camera";
import { useNavigation } from "@react-navigation/core";
import * as Location from "expo-location";
import { postPresente } from "../servicios/serviciosGenerales";
import { useScanner } from "../ScannerContext";
import * as Application from "expo-application";

// import { Audio } from "expo-av";
// import dingSound from "../assets/audio/ding.mp3";
// import warningSound from "../assets/audio/warning.mp3";
// import errorSound from "../assets/audio/error_1.mp3";

const EscaneoScreen = () => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();
  const { launchScanner } = useScanner();
  const [presente, isPresente] = useState(false);
  const [presenteStatus, setPresenteStatus] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

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
    getId();
    getPermisos();
  }, []);

  const getId = async () => {
    let id = await Application.getIosIdForVendorAsync();
    setDeviceId(id);
  };

  const getLocacion = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    setLocation(currentLocation);
  };

  const handleScan = async (data) => {
    setPresenteStatus("");
    console.log(location.coords.latitude, location.coords.longitude, deviceId);
    try {
      const response = await postPresente(
        data,
        location.coords.latitude,
        location.coords.longitude,
        deviceId
      );
      if (response === 200) {
        console.log("Presente exitoso");
        setPresenteStatus("OK");
        isPresente(true);
      } else if (response === 409) {
        console.log("Ya diste tu presente");
        setPresenteStatus("ERROR-YA-PRESENTE");
      } else {
        console.log("Error en el presente");
        setPresenteStatus("ERROR-UBICACION");
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

  const getImg = () => {
    if (presenteStatus === "OK") {
      return require("../assets/bienTick.png");
    } else if (presenteStatus === "ERROR-UBICACION") {
      return require("../assets/errorTick.png");
    } else {
      return require("../assets/warningTick.png");
    }
  };

  const getPresenteText = () => {
    if (presenteStatus === "OK") {
      return "¡Diste tu presente!";
    } else if (presenteStatus === "ERROR-UBICACION") {
      return "Error con la ubicación";
    } else {
      return "Este dispositivo ya fue registrado";
    }
  };

  const RenderTick = () => {
    useEffect(() => {}, [presenteStatus]);

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 220,
        }}
      >
        <Image source={getImg()} style={{ height: 320, width: 320 }}></Image>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          {getPresenteText()}
        </Text>
      </View>
    );
  };

  return (
    <BaseScreen proviene={"qr"}>
      {!presente && presenteStatus === null ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            paddingTop: 100,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.size_3xl,
              fontFamily: FontFamily.poppinsBold,
              fontWeight: "700",
              textAlign: "left",
              color: Color.colorDarkslateblue,
            }}
          >
            Estás en Álgebra - Aula 1
          </Text>
          <Text
            style={{
              fontSize: 20,
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
      ) : presenteStatus.length > 0 ? (
        <RenderTick />
      ) : (
        <View style={{ paddingTop: 380 }}>
          <ActivityIndicator animating={true} color={"#194569"} size={65} />
        </View>
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

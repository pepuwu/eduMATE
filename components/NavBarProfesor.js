import { useNavigation } from "@react-navigation/core";
import { Image } from "expo-image";
import React from "react";
import { Pressable, View } from "react-native";

const NavBarProfesor = ({ proviene }) => {
  const navigation = useNavigation();

  const homeIcon =
    proviene == "home"
      ? require("../assets/home1.png")
      : require("../assets/home.png");
  const encuestaIcon =
    proviene == "encuesta"
      ? require("../assets/qr6.png")
      : require("../assets/qr5.png");
  const notifyIcon =
    proviene == "notify"
      ? require("../assets/notify.png")
      : require("../assets/notify1.png");
  const profileIcon =
    proviene == "profile"
      ? require("../assets/perfil1.png")
      : require("../assets/perfil.png");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: 100,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.replace("InicioProfesorPage");
          }}
        >
          <Image source={homeIcon} style={{ height: 60, width: 60 }}></Image>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace("CreacionEncuestaPage");
          }}
        >
          <Image
            source={encuestaIcon}
            style={{ height: 60, width: 60 }}
          ></Image>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace("NotificacionesProfesorPage");
          }}
        >
          <Image source={notifyIcon} style={{ height: 60, width: 60 }}></Image>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace("PerfilProfesorPage");
          }}
        >
          <Image source={profileIcon} style={{ height: 60, width: 60 }}></Image>
        </Pressable>
      </View>
    </View>
  );
};

export default NavBarProfesor;

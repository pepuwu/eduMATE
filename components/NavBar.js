import { Image } from "expo-image";
import React from "react";
import { Pressable, View } from "react-native";

const NavBar = () => {
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
          paddingHorizontal: 20,
        }}
      >
        <Pressable>
          <Image
            source={require("../assets/home1.png")}
            style={{ height: 60, width: 60 }}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/qr.png")}
            style={{ height: 60, width: 60 }}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/notify1.png")}
            style={{ height: 60, width: 60 }}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/perfil.png")}
            style={{ height: 60, width: 60 }}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

export default NavBar;

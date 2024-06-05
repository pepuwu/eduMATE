import React from "react";
import { View, Text } from "react-native";

const NavBar = () => {
  return (
    <View>
      <Property1DefaultImage
        property1DefaultImageProp={require("../assets/home1.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={32}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
      <Image
        style={styles.qrIcon1}
        contentFit="cover"
        source={require("../assets/qr.png")}
      />
      <Pressable onPress={() => navigation.navigate("Notificaciones")}>
        <Property1DefaultImage1
          property1DefaultImage1Pro={require("../assets/notify1.png")}
          property1DefaultIconPosition="absolute"
          property1DefaultIconTop={773}
          property1DefaultIconLeft={225}
          property1DefaultIconWidth={60}
          property1DefaultIconHeight={60}
        />
      </Pressable>
      <Property1DefaultImage2
        property1DefaultImage2Pro={require("../assets/perfil.png")}
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop={773}
        property1DefaultIconLeft={330}
        property1DefaultIconWidth={60}
        property1DefaultIconHeight={60}
      />
    </View>
  );
};

export default NavBar;

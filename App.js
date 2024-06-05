const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import NotificacionVacia from "./screens/NotificacionVacia";
import DetalleNotificacion from "./screens/DetalleNotificacion";
import ScanView from "./screens/ScanView";
import Advertencia from "./screens/Advertencia";
import PantallaInicioAlumno from "./screens/PantallaInicioAlumno";
import Login1 from "./screens/Login";
import NotificacionVacia1 from "./screens/NotificacionVacia1";
import Notificaciones1 from "./screens/Notificaciones1";
import DetalleNotificacion1 from "./screens/DetalleNotificacion1";
import UbicacionView from "./screens/UbicacionView";
import Advertencia1 from "./screens/Advertencia1";
import PantallaInicioAlumno1 from "./screens/PantallaInicioAlumno1";
import Perfil1 from "./screens/Perfil1";
import PantallaInicioAlumno2 from "./screens/PantallaInicioAlumno2";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "VarelaRound-Regular": require("./assets/fonts/VarelaRound-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Sunflower-Bold": require("./assets/fonts/Sunflower-Bold.ttf"),
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-ExtraBold": require("./assets/fonts/Urbanist-ExtraBold.ttf"),
    "BarlowCondensed-SemiBold": require("./assets/fonts/BarlowCondensed-SemiBold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NotificacionVacia"
                component={NotificacionVacia}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DetalleNotificacion"
                component={DetalleNotificacion}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ScanView"
                component={ScanView}
                options={{ headerShown: false, animation: "flip" }}
              />
              <Stack.Screen
                name="Advertencia"
                component={Advertencia}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PantallaInicioAlumno"
                component={PantallaInicioAlumno}
                options={{ headerShown: false, animation: "flip" }}
              />
              <Stack.Screen
                name="Login1"
                component={Login1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NotificacionVacia1"
                component={NotificacionVacia1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notificaciones1"
                component={Notificaciones1}
                options={{ headerShown: false, animation: "flip" }}
              />
              <Stack.Screen
                name="DetalleNotificacion1"
                component={DetalleNotificacion1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UbicacionView"
                component={UbicacionView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Advertencia1"
                component={Advertencia1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PantallaInicioAlumno1"
                component={PantallaInicioAlumno1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Perfil1"
                component={Perfil1}
                options={{ headerShown: false, animation: "flip" }}
              />
              <Stack.Screen
                name="PantallaInicioAlumno2"
                component={PantallaInicioAlumno2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;

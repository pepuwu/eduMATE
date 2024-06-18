const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

import InicioAlumnoScreen from "./screens/InicioAlumno";

import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import EscaneoScreen from "./screens/Escaneo";
import NotificarScreen from "./screens/Notificar";
import PerfilScreen from "./screens/Perfil";
import LoginScreen from "./screens/Login";
import { ScannerProvider } from "./ScannerContext";

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
        <ScannerProvider>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InicioAlumnoScreen"
                  component={InicioAlumnoScreen}
                  options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen
                  name="EscaneoScreen"
                  component={EscaneoScreen}
                  options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen
                  name="NotificarScreen"
                  component={NotificarScreen}
                  options={{ headerShown: false }}
                ></Stack.Screen>
                <Stack.Screen
                  name="PerfilScreen"
                  component={PerfilScreen}
                  options={{ headerShown: false }}
                ></Stack.Screen>
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </ScannerProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;

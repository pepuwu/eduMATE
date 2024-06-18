const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
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

import { Image } from "expo-image";


const App = () => {
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

  headerRight = () => (
    <Image
      source={require("./assets/iconQrHeader.png")}
      style={{ height: 45, width: 45 }}
    ></Image>
  );

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
      <NavigationContainer>
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
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerRight: headerRight,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="EscaneoScreen"
            component={EscaneoScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerRight: headerRight,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="NotificarScreen"
            component={NotificarScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerRight: headerRight,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="PerfilScreen"
            component={PerfilScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerRight: headerRight,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

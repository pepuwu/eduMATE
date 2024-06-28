const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

import InicioAlumnoScreen from "./screens/InicioAlumno";

import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import EscaneoScreen from "./screens/Escaneo";
import NotificarScreen from "./screens/Notificar";
import PerfilScreen from "./screens/Perfil";
import LoginScreen from "./screens/Login";

import { ScannerProvider } from "./ScannerContext";

import { Image } from "expo-image";
import InicioProfesorPage from "./screens/InicioProfesor";
import CreacionEncuestaPage from "./screens/CreacionEncuestaPage";
import NotificacionesProfesorPage from "./screens/NotificacionesProfesor";
import PerfilProfesorPage from "./screens/PerfilProfesor";

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
              <Stack.Screen
                name="InicioProfesorPage"
                component={InicioProfesorPage}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: "",
                  headerRight: headerRight,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="CreacionEncuestaPage"
                component={CreacionEncuestaPage}
                options={({ navigation }) => ({
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: "",
                  headerRight: headerRight,
                  headerLeft: () => (
                    <Pressable
                      onPress={() => {
                        Alert.alert(
                          "Seguro",
                          "¿Estás seguro de que deseas salir de la creación de la encuesta?",
                          [
                            {
                              text: "No",
                              style: "cancel",
                            },
                            {
                              text: "Sí",
                              onPress: () =>
                                navigation.replace("InicioProfesorPage"),
                            },
                          ],
                          { cancelable: false }
                        );
                      }}
                    >
                      <Image
                        style={{ width: 45, height: 45 }}
                        source={require("./assets/atrasButton.png")}
                      />
                    </Pressable>
                  ),
                  animation: "slide_from_bottom",
                })}
              ></Stack.Screen>
              <Stack.Screen
                name="NotificacionesProfesorPage"
                component={NotificacionesProfesorPage}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: "",
                  headerRight: headerRight,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="PerfilProfesorPage"
                component={PerfilProfesorPage}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerTitle: "",
                  headerRight: headerRight,
                }}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </ScannerProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;

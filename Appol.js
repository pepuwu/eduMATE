import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import InicioAlumnoScreen from "./screens/InicioAlumno";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InicioAlumnoScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="InicioAlumnoScreen"
          component={InicioAlumnoScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

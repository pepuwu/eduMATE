import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import SelectDropdown from "react-native-select-dropdown";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

const materias = [
  { title: "Algebra" },
  { title: "Programación" },
  { title: "Programación 2" },
  { title: "Objetos" },
  { title: "Sistemas" },
];

const horarios = [
  { title: "08:00 - 09:00" },
  { title: "09:00 - 10:00" },
  { title: "10:00 - 11:00" },
  { title: "11:00 - 12:00" },
  { title: "12:00 - 13:00" },
];

const DropDown = ({ tipo }) => (
  <SelectDropdown
    data={tipo === "materia" ? materias : horarios}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) ||
              (tipo === "materia" ? "Materia" : "Horario")}
          </Text>
          <View
            style={{
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 10,
              backgroundColor: "#0169bf",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              paddingRight: 15,
            }}
          >
            <Image
              style={styles.image}
              source={require("../assets/arrowDown.png")}
            ></Image>
          </View>
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && { backgroundColor: "#D2D9DF" }),
          }}
        >
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  ></SelectDropdown>
);
const CreacionEncuestaPage = () => {
  const navigation = useNavigation();
  [preguntas, setPreguntas] = useState([]);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isButton2Pressed, setIsButton2Pressed] = useState(false);
  const [isButton3Pressed, setIsButton3Pressed] = useState(false);

  const handleAgregar = () => {
    setPreguntas([...preguntas, { index: preguntas.length + 1 }]);
  };
  const handleEliminar = (index) => {
    setPreguntas(preguntas.filter((_, i) => i !== index));
  };

  const handleAceptar = () => {
    navigation.navigate("InicioProfesorPage");
    Alert.alert("Encuesta creada");
  };

  return (
    <BaseScreen proviene={"encuesta"} alumno={false} visible={false}>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <View>
          <Text style={styles.headerText}>CREA</Text>
          <Text style={styles.headerText}>tu encuesta</Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          <DropDown tipo={"materia"}></DropDown>
          <DropDown tipo={"horario"}></DropDown>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ScrollView style={{ width: "100%", height: "65%" }}>
            {preguntas.map((pregunta, index) => (
              <View
                key={index}
                style={{
                  padding: 25,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.buttonMenos}
                  onPress={() => {
                    handleEliminar(index);
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 25 }}>-</Text>
                </Pressable>
                <TextInput
                  style={{
                    height: 50,
                    width: "85%",
                    backgroundColor: "#0169bf",
                    marginLeft: 10,
                    borderRadius: 12,
                    padding: 10,
                    color: "white",
                    fontWeight: "600",
                  }}
                ></TextInput>
              </View>
            ))}
            <Pressable
              style={{ padding: 25 }}
              onPress={handleAgregar}
              onPressIn={() => setIsButtonPressed(true)}
              onPressOut={() => setIsButtonPressed(false)}
            >
              <View
                style={[
                  styles.buttonPlus,
                  { backgroundColor: isButtonPressed ? "#071f40" : "#0d3873" },
                ]}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
                >
                  +
                </Text>
              </View>
            </Pressable>
          </ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: isButton2Pressed ? "#071f40" : "#0d3873",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  marginLeft: 5,
                }}
                onPressIn={() => setIsButton2Pressed(true)}
                onPressOut={() => setIsButton2Pressed(false)}
                onPress={handleAceptar}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  Guardar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default CreacionEncuestaPage;

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "800",
    color: "white",
  },
  dropdownButtonStyle: {
    width: 190,
    height: 40,
    backgroundColor: "#E9ECEF",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#151E26",
    paddingLeft: 12,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  image: {
    width: 22,
    height: 22,
  },
  buttonPlus: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonMenos: {
    height: 50,
    width: 50,
    backgroundColor: "#fdf6eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
});

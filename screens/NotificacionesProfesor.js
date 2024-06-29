import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BaseScreen from "../components/BaseComponente";

const materias = [
  "Algebra",
  "TIF",
  "Programación 2",
  "Sistemas de información",
  "Cálculo",
  "Desarrollo web",
  "Química",

];

const NotificacionesProfesorPage = () => {
  return (
    <BaseScreen proviene={"encuesta"} alumno={false} visible={false}>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <View>
          <Text style={styles.headerText}>RESPUESTAS</Text>
          <View style={styles.line} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <ScrollView style={{ width: "100%", height: "90%", marginTop: 8 }}>
            {materias.map((materia, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardHeader}>{materia}</Text>
                <Text style={styles.cardText}>
                  Estos resultados son de la encuesta realizada para {materia}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => console.log("Ver resultados presionado")}
                >
                  <Text style={styles.buttonText}>VER RESULTADOS</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </BaseScreen>
  );
};

export default NotificacionesProfesorPage;

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "800",
    color: "#002499",
  },
  line: {
    height: 3,
    backgroundColor: "#D9D9D990",
    marginTop: 5,
    marginHorizontal: "10%",
    borderRadius: 1.5,
  },
  card: {
    backgroundColor: "#D9D9D990",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: "center",
    elevation: 3,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

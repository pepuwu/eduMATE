import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import { useNavigation } from "@react-navigation/native";

export const materias = [
  "Algebra",
  "TIF",
  "Programación 2",
  "Sistemas de información",
  "Cálculo",
  "Desarrollo web",
  "Química",
];

const NotificacionesProfesorPage = () => {
  const navigation = useNavigation();
  return (
    <BaseScreen proviene={"notify"} alumno={false}>
      <View style={{ flex: 8, paddingTop: 90 }}>
        <View>
          <Text style={styles.headerText}>RESPUESTAS</Text>
          <View style={styles.line} />
        </View>
        <ScrollView style={{ width: "100%", marginTop: 10 }}>
          {materias.map((materia, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardHeader}>{materia}</Text>
              <Text style={styles.cardText}>
                Estos resultados son de la encuesta realizada para {materia}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("GraficoEncuestaPage", { materia })}
              >
                <Text style={styles.buttonText}>VER RESULTADOS</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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

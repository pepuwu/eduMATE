import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { useNavigation } from "@react-navigation/native";

const GraficoEncuestaPage = () => {
  const navigation = useNavigation();
  const barData = [
    { value: 94, label: "29/02" },
    { value: 93, label: "07/03" },
    { value: 85, label: "14/03" },
    { value: 80, label: "21/03" },
    { value: 60, label: "28/03" },
    { value: 65, label: "04/04" },
    { value: 85, label: "11/04" },
  ];

  const pieData = [
    { value: 47, color: "#3498db", label: "Excelente" },
    { value: 16, color: "#9b59b6", label: "Muy Bien" },
    { value: 40, color: "#1abc9c", label: "Bien" },
    { value: 3, color: "#e74c3c", label: "Mal" },
  ];

  return (
    <BaseScreen proviene={"notify"} alumno={false} visible={false}>
      <View style={{ paddingTop: 90 }}>
        <View style={styles.outerCard}>
          <Text style={styles.headerText}>Detalle</Text>
          <View style={styles.graficosContainer}>
            <Text style={styles.tituloGrafico}>Performance</Text>
            <PieChart data={pieData} innerRadius={0} radius={70} />
            <View style={styles.legendContainer}>
              {pieData.map((item, index) => (
                <View key={index} style={styles.itemResultado}>
                  <View
                    style={[styles.colorItem, { backgroundColor: item.color }]}
                  />
                  <Text style={styles.textoResultado}>
                    {item.label} : {item.value}%
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.graficosContainer}>
            <Text style={styles.tituloGrafico}>Asistencia</Text>
            <ScrollView hotizontal style={{ width: "100%" }}>
              <BarChart
                isAnimated
                data={barData}
                barWidth={50}
                barBorderRadius={5}
                frontColor="#3498db"
                xAxisIndicesColor="#95ccea"
                yAxisColor="#95ccea"
                yAxisTextStyle={{ color: "#95ccea", fontSize: 10 }}
                xAxisLabels={{
                  color: "#95ccea",
                }}
                xAxisLabelTextStyle={{
                  color: "#95ccea",
                  fontSize: 8,
                  fontWeight: "bold",
                }}
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.botonContainer}>
          <TouchableOpacity
            style={[
              styles.boton,
              { backgroundColor: "#1E90FF", marginBottom: 20 },
            ]}
            onPress={() => navigation.replace("InicioProfesorPage")}
          >
            <Text style={styles.botonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseScreen>
  );
};

export default GraficoEncuestaPage;

const styles = StyleSheet.create({
  headerText: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "800",
    color: "#002499",
  },
  outerCard: {
    backgroundColor: "#D9D9D990",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginBottom: 5,
  },
  graficosContainer: {
    backgroundColor: "#201474",
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "90%",
  },
  tituloGrafico: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  itemResultado: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    marginVertical: 5,
  },
  colorItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  textoResultado: {
    color: "white",
    fontSize: 13,
  },
  graficoPieLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  botonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  boton: {
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  botonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

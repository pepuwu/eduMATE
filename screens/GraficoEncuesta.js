import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from "react-native";
import BaseScreen from "../components/BaseComponente";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { useNavigation } from "@react-navigation/native";

const GraficoEncuestaPage = () => {
    const navigation = useNavigation();
    const barData = [
        { value: 50, label: 'Algebra' },
        { value: 80, label: 'TIF' },
        { value: 70, label: 'Programación 2' },
        { value: 90, label: 'Sistemas de información' },
        { value: 65, label: 'Cálculo' },
        { value: 85, label: 'Desarrollo web' },
        { value: 75, label: 'Química' },
    ];

    const pieData = [
        { value: 47, color: '#3498db', label: 'Excelente' },
        { value: 16, color: '#9b59b6', label: 'Muy Bien' },
        { value: 40, color: '#1abc9c', label: 'Bien' },
        { value: 3, color: '#e74c3c', label: 'Mal' },
    ];

    return (
        <BaseScreen proviene={"notify"} alumno={false} visible={false}>
            <View style={{ flex: 8, paddingTop: 90 }}>
                <ScrollView style={{ width: "100%", marginTop: 10, marginBottom: 100 }}>
                    <View style={styles.outerCard}>
                        <Text style={styles.headerText}>Detalle</Text>
                        <View style={styles.line} />
                        <View style={styles.graficosContainer}>
                            <Text style={styles.tituloGrafico}>Performance</Text>
                            <PieChart
                                data={pieData}
                                innerRadius={0}
                                radius={70}
                            />
                            <View style={styles.legendContainer}>
                                {pieData.map((item, index) => (
                                    <View key={index} style={styles.itemResultado}>
                                        <View style={[styles.colorItem, { backgroundColor: item.color }]} />
                                        <Text style={styles.textoResultado}>{item.label} : {item.value}%</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={styles.graficosContainer}>
                            <Text style={styles.tituloGrafico}>Overview</Text>
                            <BarChart
                                width={195}
                                data={barData}
                                barWidth={30}
                                barBorderRadius={5}
                                frontColor="#3498db"
                                xAxisColor={'white'}
                                yAxisColor={'white'}
                                yAxisTextStyle={{ color: 'white' }}
                                xAxisLabels={{ color: 'white' }}
                                style={{ marginTop: 20, width: '100%' }}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.botonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.boton,
                            { backgroundColor: "#1E90FF" },
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
    line: {
        height: 3,
        backgroundColor: "#D9D9D990",
        marginTop: 5,
        marginHorizontal: "10%",
        borderRadius: 1.5,
    },
    outerCard: {
        backgroundColor: "#D9D9D990",
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",
        marginBottom: 20,
    },
    graficosContainer: {
        backgroundColor: "#201474",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
        width: '90%',
    },
    tituloGrafico: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    itemResultado: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        marginVertical: 5,
    },
    colorItem: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    textoResultado: {
        color: 'white',
        fontSize: 13,
    },
    graficoPieLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
    botonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    botonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

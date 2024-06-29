import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import { BarChart } from "react-native-gifted-charts";


const GraficoEncuestaPage = () => {
    const data = [
        { value: 50, label: 'Algebra' },
        { value: 80, label: 'TIF' },
        { value: 70, label: 'Programación 2' },
        { value: 90, label: 'Sistemas de información' },
        { value: 65, label: 'Cálculo' },
        { value: 85, label: 'Desarrollo web' },
        { value: 75, label: 'Química' },
    ];

    return (
        <BaseScreen proviene={"notify"} alumno={false}>
            <View style={{ flex: 8, paddingTop: 90 }}>
                <ScrollView style={{ width: "100%", marginTop: 10 }}>
                    <View style={styles.outerCard}>
                        <Text style={styles.headerText}>Detalle</Text>
                        <View style={styles.line} />
                        <BarChart
                            data={data}
                            barWidth={30}
                            barBorderRadius={5}
                            frontColor="#6a1b9a"
                        />

                    </View>
                </ScrollView>
            </View >
        </BaseScreen >
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
        backgroundColor: "#79abed",
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",
    },
    card: {
        backgroundColor: "#D9D9D990",
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
        alignItems: "center",
        width: '90%'
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

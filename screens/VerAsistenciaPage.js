import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import BaseScreen from "../components/BaseComponente";
import { useNavigation, useRoute } from "@react-navigation/native";

const VerAsistenciaPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { materia, barData } = route.params || {};

    if (!materia || !barData) {
        return (
            <BaseScreen proviene={"notify"} alumno={false} visible={false}>
                <View style={{ paddingTop: 90 }}>
                    <Text style={styles.headerText}>Datos no disponibles</Text>
                    <View style={styles.botonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.boton,
                                { backgroundColor: "#1E90FF", marginBottom: 20 },
                            ]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.botonText}>Volver</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BaseScreen>
        );
    }

    return (
        <BaseScreen proviene={"notify"} alumno={false} visible={false}>
            <View style={{ paddingTop: 90 }}>
                <Text style={styles.headerText}>{materia}</Text>
                <View style={styles.botonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.boton,
                            { backgroundColor: "#1E90FF", marginBottom: 20 },
                        ]}
                        onPress={() => navigation.replace("GraficoEncuestaPage", { materia })}
                    >
                        <Text style={styles.botonText}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </BaseScreen>
    );
};

export default VerAsistenciaPage;

const styles = StyleSheet.create({
    botonContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        flexDirection: "row",
    },
    boton: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10,
    },
    botonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    headerText: {
        alignSelf: "center",
        fontSize: 35,
        fontWeight: "800",
        color: "#002499",
    },
});

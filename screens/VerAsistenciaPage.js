import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import BaseScreen from "../components/BaseComponente";
import { useNavigation, useRoute } from "@react-navigation/native";
import { alumnos } from "./mock/asistenciaMock";
import { barData } from "./GraficoEncuesta";

const VerAsistenciaPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { materia } = route.params || {};
    const [selectedDate, setSelectedDate] = useState(barData[0].label);
    const [selectedStudents, setSelectedStudents] = useState(alumnos[barData[0].label]);
    const [pickerVisible, setPickerVisible] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedStudents(alumnos[date] || []);
        setPickerVisible(false);
    };

    const openPicker = () => {
        setPickerVisible(true);
    };

    return (
        <BaseScreen proviene={"notify"} alumno={false} visible={false}>
            <View style={styles.container}>
                <Text style={styles.headerText}>{materia}</Text>
                <TouchableOpacity
                    style={[
                        styles.boton,
                        { backgroundColor: "#1E90FF", marginTop: 25 },
                    ]}
                    onPress={openPicker}
                >
                    <Text style={styles.botonText}>Seleccionar Fecha</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={pickerVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedDate}
                                style={styles.picker}
                                onValueChange={(itemValue) => handleDateChange(itemValue)}
                            >
                                {barData.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.label} />
                                ))}
                            </Picker>
                            <Button title="Cerrar" onPress={() => setPickerVisible(false)} />
                        </View>
                    </View>
                </Modal>
                <View style={styles.contentContainer}>
                    {selectedStudents.length > 0 && (
                        <ScrollView style={styles.scrollView}>
                            {selectedStudents.map((student, index) => (
                                <View key={index} style={styles.studentCard}>
                                    <Text style={styles.studentName}>{student.nombre}</Text>
                                    <Text style={styles.studentStatus}>
                                        {student.estado === "presente" ? "✓" : "✗"}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </View>
                <View style={styles.botonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.boton,
                            { backgroundColor: "#1E90FF" },
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
    container: {
        paddingTop: 70,
        flex: 1,
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        padding: 20,
        alignItems: 'center',
    },
    picker: {
        height: 200,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 0,
    },
    scrollView: {
        width: '100%',
        marginTop: 20,
    },
    studentCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d3d3d3',
        backgroundColor: '#fff',
        width: '100%',
    },
    studentName: {
        fontSize: 16,
        color: '#000',
    },
    studentStatus: {
        fontSize: 16,
        color: '#000',
    },
    botonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        paddingTop: 10,
        flexDirection: 'row',
    },
    boton: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    botonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    headerText: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: '800',
        color: '#002499',
        paddingTop: 25,
    },
});

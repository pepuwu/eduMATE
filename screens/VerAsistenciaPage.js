import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Modal,
    TextInput,
    Image,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import BaseScreen from "../components/BaseComponente";
import { useNavigation, useRoute } from "@react-navigation/native";
import { alumnos } from "./mock/asistenciaMock"; // Asegúrate de tener la ruta correcta
import { barData } from "./GraficoEncuesta";

// Importa las imágenes
import bienTick from '../assets/bienTick.png';
import errorTick from '../assets/errorTick.png';
import maleImage from '../assets/teacher1.png';
import femaleImage from '../assets/teacher2.png';

const VerAsistenciaPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { materia } = route.params || {};
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [pickerVisible, setPickerVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedStudents(alumnos[date] || []);
        setPickerVisible(false);
    };

    const openPicker = () => {
        setPickerVisible(true);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredStudents = selectedStudents.filter(student =>
        student.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <BaseScreen proviene={"notify"} alumno={false} visible={false}>
            <View style={styles.container}>
                {!selectedDate && (
                    <View style={styles.noDateContainer}>
                        <Text style={styles.textoNoFecha}>No tiene fecha seleccionada</Text>
                        <TouchableOpacity
                            style={[
                                styles.boton,
                                { backgroundColor: "#1E90FF", marginTop: 20 },
                            ]}
                            onPress={openPicker}
                        >
                            <Text style={styles.botonText}>Seleccionar Fecha</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {selectedDate && (
                    <>
                        <View>
                            <View style={styles.topContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.boton,
                                        { backgroundColor: "#1E90FF" },
                                    ]}
                                    onPress={openPicker}
                                >
                                    <Text style={styles.botonText}>Seleccionar Fecha</Text>
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Buscar alumno"
                                    value={searchQuery}
                                    onChangeText={handleSearch}
                                />
                            </View>
                            <Text style={styles.subtituloFecha}>
                                {materia} - {selectedDate}
                            </Text>
                        </View>
                        <View style={styles.contentContainer}>
                            {filteredStudents.length > 0 && (
                                <ScrollView style={styles.scrollView}>
                                    {filteredStudents.map((student, index) => (
                                        <View key={index} style={styles.studentCard}>
                                            <Image
                                                source={student.genero === "masculino" ? maleImage : femaleImage}
                                                style={styles.studentImage}
                                            />
                                            <Text style={styles.nombreAlumno}>{student.nombre}</Text>
                                            <Image
                                                source={student.estado === "presente" ? bienTick : errorTick}
                                                style={styles.estadoImagen}
                                            />
                                        </View>
                                    ))}
                                </ScrollView>
                            )}
                        </View>
                    </>
                )}
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
                                itemStyle={styles.pickerItem}
                            >
                                {barData.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.label} />
                                ))}
                            </Picker>
                            <TouchableOpacity
                                style={[
                                    styles.boton,
                                    { backgroundColor: "#1E90FF", marginTop: 20 },
                                ]}
                                onPress={() => setPickerVisible(false)}
                            >
                                <Text style={styles.botonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    noDateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    pickerContainer: {
        backgroundColor: '#92cfed',
        borderRadius: 10,
        width: '90%',
        padding: 20,
        alignItems: 'center',
    },
    picker: {
        height: 200,
        width: '100%',
    },
    pickerItem: {
        color: '#002499',
        fontWeight: 'bold',
    },
    searchInput: {
        height: 40,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        flex: 1,
        marginLeft: 10,
    },
    subtituloFecha: {
        fontSize: 20,
        color: '#002499',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoNoFecha: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#002499',
        textAlign: 'center',
        marginBottom: 20,
    },
    scrollView: {
        width: '100%',
        marginTop: 20,
    },
    studentCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20, // Altura aumentada
        marginVertical: 5,
        borderWidth: 2, // Bordes más gruesos
        borderRadius: 5,
        borderColor: 'rgba(0, 36, 153, 0.7)', // Borde azul oscuro
        backgroundColor: 'rgba(173, 216, 230, 0.5)', // Fondo con transparencia azul claro
        width: '100%',
    },
    studentImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    nombreAlumno: {
        fontSize: 16,
        color: '#002499',
        fontWeight: 'bold',
        flex: 1,
    },
    estadoImagen: {
        width: 30, // Tamaño aumentado
        height: 30, // Tamaño aumentado
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

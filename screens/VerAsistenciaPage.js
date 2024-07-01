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
import { Picker } from "@react-native-picker/picker";
import BaseScreen from "../components/BaseComponente";
import { useNavigation, useRoute } from "@react-navigation/native";
import { alumnos } from "./mock/asistenciaMock";
import { barData } from "./GraficoEncuesta";

import bienTick from "../assets/bienTick.png";
import errorTick from "../assets/errorTick.png";
import imagenMasculino from "../assets/teacher1.png";
import imagenFemenino from "../assets/teacher2.png";

const VerAsistenciaPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { materia } = route.params || {};
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [alumnosSeleccionados, setAlumnosSeleccionados] = useState([]);
  const [selectorVisible, setSelectorVisible] = useState(false);
  const [consultaBusqueda, setConsultaBusqueda] = useState("");

  const handleDateChange = (fecha) => {
    setFechaSeleccionada(fecha);
    setAlumnosSeleccionados(alumnos[fecha] || []);
    setSelectorVisible(false);
  };

  const abrirSelector = () => {
    setSelectorVisible(true);
  };

  const handleSearch = (consulta) => {
    setConsultaBusqueda(consulta);
  };

  const alumnosFiltrados = alumnosSeleccionados.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(consultaBusqueda.toLowerCase())
  );

  return (
    <BaseScreen proviene={"notify"} alumno={false} visible={false}>
      <View style={styles.contenedor}>
        {!fechaSeleccionada && (
          <View style={styles.contenedorSinFecha}>
            <Text style={styles.textoSinFecha}>
              No tiene fecha seleccionada
            </Text>
            <TouchableOpacity
              style={[
                styles.boton,
                { backgroundColor: "#1E90FF", marginTop: 20 },
              ]}
              onPress={abrirSelector}
            >
              <Text style={styles.textoBoton}>Seleccionar Fecha</Text>
            </TouchableOpacity>
          </View>
        )}
        {fechaSeleccionada && (
          <>
            <View>
              <View style={styles.contenedorSuperior}>
                <TouchableOpacity
                  style={[styles.boton, { backgroundColor: "#1E90FF" }]}
                  onPress={abrirSelector}
                >
                  <Text style={styles.textoBoton}>Seleccionar Fecha</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.entradaBusqueda}
                  placeholder="Buscar alumno"
                  value={consultaBusqueda}
                  onChangeText={handleSearch}
                />
              </View>
              <Text style={styles.subtituloFecha}>
                {materia} - {fechaSeleccionada}
              </Text>
            </View>
            <View style={styles.contenedorContenido}>
              {alumnosFiltrados.length > 0 && (
                <ScrollView style={styles.scrollView}>
                  {alumnosFiltrados.map((alumno, index) => (
                    <View key={index} style={styles.tarjetaAlumno}>
                      <Image
                        source={
                          alumno.genero === "masculino"
                            ? imagenMasculino
                            : imagenFemenino
                        }
                        style={styles.imagenAlumno}
                      />
                      <Text style={styles.nombreAlumno}>{alumno.nombre}</Text>
                      <Image
                        source={
                          alumno.estado === "presente" ? bienTick : errorTick
                        }
                        style={styles.imagenEstado}
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
          visible={selectorVisible}
          animationType="slide"
        >
          <View style={styles.contenedorModal}>
            <View style={styles.contenedorSelector}>
              <Picker
                selectedValue={fechaSeleccionada}
                style={styles.selector}
                onValueChange={(itemValue) => handleDateChange(itemValue)}
                itemStyle={styles.itemSelector}
              >
                {barData.map((item, index) => (
                  <Picker.Item
                    key={index}
                    label={item.label}
                    value={item.label}
                  />
                ))}
              </Picker>
              <TouchableOpacity
                style={[
                  styles.boton,
                  { backgroundColor: "#1E90FF", marginTop: 20 },
                ]}
                onPress={() => setSelectorVisible(false)}
              >
                <Text style={styles.textoBoton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.contenedorBoton}>
          <TouchableOpacity
            style={[styles.boton, { backgroundColor: "#1E90FF" }]}
            onPress={() =>
              navigation.replace("GraficoEncuestaPage", { materia })
            }
          >
            <Text style={styles.textoBoton}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BaseScreen>
  );
};

export default VerAsistenciaPage;

const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 70,
    flex: 1,
  },
  contenedorSuperior: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contenedorSinFecha: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contenedorSelector: {
    backgroundColor: "#92cfed",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    alignItems: "center",
  },
  selector: {
    height: 200,
    width: "100%",
  },
  itemSelector: {
    color: "#002499",
    fontWeight: "bold",
  },
  entradaBusqueda: {
    height: 40,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
  },
  subtituloFecha: {
    fontSize: 20,
    color: "#002499",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  contenedorContenido: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textoSinFecha: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002499",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
    marginTop: 20,
  },
  tarjetaAlumno: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "rgba(173, 216, 230, 0.5)",
    width: "100%",
  },
  imagenAlumno: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nombreAlumno: {
    fontSize: 16,
    color: "#002499",
    fontWeight: "bold",
    flex: 1,
  },
  imagenEstado: {
    width: 30,
    height: 30,
  },
  contenedorBoton: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    paddingTop: 10,
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
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  textoHeader: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "800",
    color: "#002499",
    paddingTop: 25,
  },
});

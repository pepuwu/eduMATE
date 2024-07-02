import api from "./axiosConfig";

export const postPresente = async (
  idAula,
  gpsLatitud,
  gpsLongitud,
  idDevice
) => {
  try {
    const response = await api.post("/edumate/presente", {
      idAula: idAula,
      latitud: gpsLatitud,
      longitud: gpsLongitud,
      dispositivo: idDevice,
    });
    return response.status;
  } catch (error) {
    return error.response.status;
  }
};

export const getPresentes = async () => {
  try {
    const response = await api.get("/edumate/verpresentes");
    return response.data;
  } catch (error) {
    return error.response.status;
  }
};

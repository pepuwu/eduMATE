import api from "./axiosConfig";

export const postPresente = async (idAula, gpsLatitud, gpsLongitud) => {
  try {
    const response = await api.post("/edumate/presente", {
      idAula: idAula,
      latitud: gpsLatitud,
      longitud: gpsLongitud,
    });
    return response.status;
  } catch (error) {}
};

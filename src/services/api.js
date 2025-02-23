import axios from "axios";

const API_URL = "http://localhost:8080"; // Cambia esto según tu backend

export const buscarPrecios = async (producto) => {
  try {
    const response = await axios.get(`${API_URL}/precios/buscar`, {
      params: { producto },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los precios:", error);
    return [];
  }
};

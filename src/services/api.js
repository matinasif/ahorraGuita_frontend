import axios from "axios";

const API_URL = "http://localhost:8080/productos"; // Cambia si usas otro puerto

export const buscarPrecios = async (nombre) => {
  try {
    const response = await axios.get(`${API_URL}/buscar`, {
      params: { nombre },
    });
    return response.data; // Retorna la lista de productos con precios
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return [];
  }
};
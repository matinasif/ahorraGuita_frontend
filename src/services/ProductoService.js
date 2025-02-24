import axios from "axios";

const API_URL = "http://localhost:8080/productos"; // Ajusta la URL según tu backend

export const buscarProductos = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/buscar`, {
      params: { nombre: query },
    });
    console.log("Respuesta del backend:", response.data); // 👀 Verifica qué datos llegan
    
    return response.data; // Retorna la lista de productos
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return [];
  }
};
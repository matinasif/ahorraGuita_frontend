import React, { useState } from "react";
import SearchBar from "./SearchBarTemp"; // Asegúrate de que la ruta es correcta
import ProductList from "./ProductList"; // Verifica que existe
import { Container } from "react-bootstrap";


function Home() {
  const [productos, setProductos] = useState([]); // Estado para los resultados

  return (
    <Container>
      <h1>Comparador de Precios</h1>
      <SearchBar onResults={setProductos} /> 
      <ProductList productos={productos} />
    </Container>
  );
}

export default Home;
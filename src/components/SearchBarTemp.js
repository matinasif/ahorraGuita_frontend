import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { buscarProductos } from "../services/ProductoService"; // Asegúrate de que la ruta es correcta

function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim() !== "") {
      try {
        console.log("Buscando productos con el término:", query); // Verifica que esta parte se ejecute
        const resultados = await buscarProductos(query);
        onResults(resultados); // Envía los resultados al padre (Home.js)
      } catch (error) {
        console.error("Error en la búsqueda:", error);
        onResults([]); // Si hay error, limpia los resultados
      }
    } else {
      console.log("La búsqueda está vacía");
      onResults([]); // Si la consulta está vacía, limpia los resultados
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe
      console.log("Enter presionado"); // Verifica que Enter sea detectado
      handleSearch(); // Ejecuta la búsqueda si se presiona Enter
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={5}>
          <Form className="d-flex input-group mb-3">
            <Form.Control
              type="text"
              placeholder="Buscar producto..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown} // Escuchar evento de tecla
              
            />
            <Button variant="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;

import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { buscarProductos } from "../services/ProductoService"; // Asegúrate de que la ruta es correcta

function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim() !== "") {
      try {
        const resultados = await buscarProductos(query);
        onResults(resultados); // Envía los resultados al padre (Home.js)
      } catch (error) {
        console.error("Error en la búsqueda:", error);
        onResults([]); // Si hay error, limpia los resultados
      }
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Buscar producto..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="me-2"
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
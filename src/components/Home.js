import React, { useState } from "react";
import SearchBar from "./SearchBarTemp";
import ProductList from "./ProductList";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "../App.css";

function Home() {
  const [productos, setProductos] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSearchResults = (newProductos) => {
    setProductos(newProductos);
    setAlertVisible(newProductos.length === 0);
  };

  return (
    <Container className="d-flex flex-column min-vh-100">
      <div className="text-center mt-5">
        <h1 className="display-4">Ahorra Guita</h1>
        <p className="lead">Encontrá el mejor precio para tu producto fácilmente</p>

        {/* Barra de búsqueda con mejor tamaño */}
        <Row className="justify-content-center w-100">
          <Col xs={12} sm={10} md={8} lg={6}>
            <SearchBar onResults={handleSearchResults} />
          </Col>
        </Row>

        {/* Alerta si no hay productos */}
        {alertVisible && (
          <Alert variant="warning" className="mt-3">
            No se encontraron productos. Intenta con otro término de búsqueda.
          </Alert>
        )}

        {/* Lista de productos */}
        <ProductList productos={productos} />
      </div>
    </Container>
  );
}

export default Home;

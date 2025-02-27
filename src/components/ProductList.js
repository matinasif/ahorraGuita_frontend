import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";

function ProductList({ productos = [] }) {
  const [listaProductos, setListaProductos] = useState([]);
  const [mejorPrecio, setMejorPrecio] = useState(null); // Guardamos el menor precio en sí
  const [navbarHeight, setNavbarHeight] = useState(0); // Para almacenar la altura del navbar

  useEffect(() => {
    if (productos.length > 0) {
      const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
      setListaProductos(productosOrdenados);
      setMejorPrecio(productosOrdenados[0].precio); // Guardamos el precio más bajo
    } else {
      setListaProductos([]);
      setMejorPrecio(null);
    }

    // Calcula la altura del navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, [productos]);

  return (
    <Container style={{ marginTop: `${navbarHeight}px` }}> {/* Ajuste dinámico de margin-top */}
      {listaProductos.length > 0 ? (
        <Row className="justify-content-center">
          {listaProductos.map((producto) => (
            <Col md={4} sm={6} xs={12} key={`${producto.productId}-${producto.nombreSupermercado}`} className="mb-4 d-flex justify-content-center" style={{ maxWidth: "250px" }}>
              <ProductCard product={producto} mejorPrecio={producto.precio === mejorPrecio} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={6}>
            <Alert variant="warning" className="text-center">
              No se encontraron productos
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductList;

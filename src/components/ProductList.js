import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "../App.css";

function ProductList({ productos = [] }) {
  const [listaProductos, setListaProductos] = useState([]);

  // Se ejecuta cada vez que `productos` cambia
  useEffect(() => {
    // Ordena los productos por precio antes de actualizar el estado
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    setListaProductos(productosOrdenados);
  }, [productos]);

  return (
    <Container className="mt-4">
      {listaProductos.length > 0 ? (
        <Row>
          {listaProductos.map((producto) => (
            // Aquí asignamos un 12 (ancho completo) en pantallas pequeñas, 6 (mitad) en tabletas,
            // y 4 (aproximadamente 30%) en pantallas grandes
            <Col xs={12} sm={6} md={4} key={`${producto.productId}-${producto.nombreSupermercado}`}>
              <ProductCard product={producto} />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="warning" className="text-center">
          No se encontraron productos
        </Alert>
      )}
    </Container>
  );
}

export default ProductList;

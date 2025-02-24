import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";

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
            <Col md={4} key={`${producto.productId}-${producto.nombreSupermercado}`}>
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

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { buscarPrecios } from "../services/api";

function ProductList({ query }) {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      if (!query) return;

      setLoading(true);
      const data = await buscarPrecios(query);
      setPrices(data);
      setLoading(false);
    };

    fetchPrices();
  }, [query]);

  return (
    <Container className="mt-4">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Cargando precios...</p>
        </div>
      ) : prices.length > 0 ? (
        <Row>
          {prices.map((precio) => (
            <Col md={4} key={precio.precio_id}>
              <ProductCard product={precio} />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="warning" className="text-center">
          No hay precios disponibles para este producto
        </Alert>
      )}
    </Container>
  );
}

export default ProductList;

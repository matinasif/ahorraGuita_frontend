import React from "react";
import { Card } from "react-bootstrap";

function ProductCard({ product }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{product.nombreProducto}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${product.precio}
          <br />
          <strong>Supermercado:</strong> {product.nombreSupermercado}
          <br />
          <small>{new Date(product.precioFecha).toLocaleDateString()}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
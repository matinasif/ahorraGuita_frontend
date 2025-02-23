import React from "react";
import { Card } from "react-bootstrap";

function ProductCard({ product }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{product.producto_nombre}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${product.precio}
          <br />
          <strong>Supermercado:</strong> {product.supermercado_nombre}
          <br />
          <small>{new Date(product.precio_fecha).toLocaleDateString()}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

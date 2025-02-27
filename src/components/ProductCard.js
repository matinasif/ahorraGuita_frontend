import React from "react";
import { Card } from "react-bootstrap";

function ProductCard({ product }) {
  const imageUrl = product.imagenUrl || "https://via.placeholder.com/150";

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Img variant="top" src={imageUrl} alt={product.nombreProducto} /> {/* 👈 Mostrar la imagen */}
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
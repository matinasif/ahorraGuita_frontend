import React from "react";
import { Card, Badge } from "react-bootstrap";

function ProductCard({ product, mejorPrecio }) {
  const imageUrl = product.imagenUrl || "https://via.placeholder.com/150";

  return (
    <Card className="mb-3 shadow-sm" style={{ width: "100%", fontSize: "0.9rem", maxWidth: "220px" }}>
    <div style={{ width: "100%", height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card.Img
        className="img-fluid rounded"
        variant="top"
        src={imageUrl}
        alt={product.nombreProducto}
        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} // ⬅️ Esto evita cortes
      />
    </div>
    <Card.Body>
      <Card.Title style={{ fontSize: "1rem" }}>
        {product.nombreProducto}{" "}
        {mejorPrecio && <Badge bg="success">Mejor Precio</Badge>}
      </Card.Title>
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

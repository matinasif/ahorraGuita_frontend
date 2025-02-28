import React, { useState } from "react";
import { Card, Badge, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AgregarPrecio from "./AgregarPrecio"; // Asumimos que el formulario de agregar precio está en este archivo

function ProductCard({ product, mejorPrecio }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAgregarPrecio = () => {
    if (!token) {
      // Si no está logueado, redirigimos a la página de login
      alert("Debes iniciar sesión para agregar un precio.");
      navigate("/login");
    } else {
      // Si está logueado, mostramos el modal para agregar el precio
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

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
          {mejorPrecio && <Badge bg="success" className="position-absolute top-0 end-0 m-2" style={{ fontSize: "0.8rem" }}>Mejor Precio</Badge>}
        </Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${product.precio}
          <br />
          <strong>Supermercado:</strong> {product.nombreSupermercado}
          <br />
          <small>{new Date(product.precioFecha).toLocaleDateString()}</small>
        </Card.Text>

        {/* Botón para agregar precio */}
        <Button variant="primary" onClick={handleAgregarPrecio}>
          Tengo un mejor precio
        </Button>
      </Card.Body>

      {/* Modal para agregar precio */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Precio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AgregarPrecio producto={product} cerrarModal={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default ProductCard;

import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AgregarPrecio({ producto, cerrarModal }) {
  const [precio, setPrecio] = useState("");
  const [supermercados, setSupermercados] = useState([]);
  const [supermercadoId, setSupermercadoId] = useState("");
  const [nuevoSupermercado, setNuevoSupermercado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const token = localStorage.getItem("token");

  // Cargar supermercados desde la API
  useEffect(() => {
    axios.get("http://localhost:8080/supermercados")
      .then(response => setSupermercados(response.data)) // Cambié 'super' por 'supermercado'
      .catch(error => console.error("Error al obtener supermercados:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Debes iniciar sesión para agregar un precio.");
      return;
    }

    let finalSupermercadoId = supermercadoId;

    // Si el usuario ingresó un nuevo supermercado, primero lo registramos
    if (!supermercadoId && nuevoSupermercado.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:8080/supermercados/agregar",
          { nombreSupermercado: nuevoSupermercado },
          { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
        );

        finalSupermercadoId = response.data.supermercadoId;
      } catch (error) {
        console.error("Error al agregar el supermercado:", error);
        setMensaje("Error al agregar el supermercado.");
        return;
      }
    }

    // Enviar el precio con el supermercado seleccionado o recién creado
    const nuevoPrecio = {
      productoId: producto.productoId,
      precio: parseFloat(precio),
      supermercadoId: parseInt(finalSupermercadoId)
    };

    try {
      await axios.post("http://localhost:8080/precios/agregar", nuevoPrecio, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      setMensaje("Precio agregado correctamente.");
      setTimeout(() => cerrarModal(), 1000); // Cierra el modal después de enviar el precio
    } catch (error) {
      console.error("Error al agregar el precio:", error);
      setMensaje("Error al agregar el precio.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {mensaje && <div className="alert alert-info">{mensaje}</div>}
      
      {/* Producto (deshabilitado) */}
      <Form.Group className="mb-3">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" value={producto.nombreProducto} disabled />
      </Form.Group>

      {/* Precio */}
      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          placeholder="Ingrese el precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </Form.Group>

      {/* Supermercado (selección o ingreso manual) */}
      <Form.Group className="mb-3">
        <Form.Label>Supermercado</Form.Label>
        <Form.Select
          value={supermercadoId}
          onChange={(e) => {
            setSupermercadoId(e.target.value);
            setNuevoSupermercado(""); // Limpiar input si se selecciona un supermercado existente
          }}
        >
          <option value="">Selecciona un supermercado</option>
          {supermercados.map((supermercado) => ( // Cambié 'super' por 'supermercado'
            <option key={supermercado.supermercadoId} value={supermercado.supermercadoId}>
              {supermercado.nombreSupermercado}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Campo para agregar un supermercado nuevo */}
      <Form.Group className="mb-3">
        <Form.Label>¿No está en la lista? Agrega uno nuevo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del supermercado"
          value={nuevoSupermercado}
          onChange={(e) => {
            setNuevoSupermercado(e.target.value);
            setSupermercadoId(""); // Limpiar selección si se ingresa un nuevo supermercado
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Guardar Precio
      </Button>
    </Form>
  );
}

export default AgregarPrecio;

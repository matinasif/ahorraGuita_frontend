import React, { useState } from 'react';

function AgregarProducto() {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    supermercado: '',
    fecha: '',
    categoria: ''
  });

  const categorias = [
    "Frutas", "Verduras", "Papas y Tubérculos", "Hierbas y Aromáticas", "Leche", "Huevos", "Yogur", "Panadería Salada",
    "Tortillas y Arepas", "Gaseosas", "Aguas Minerales y de Mesa", "Enlatados y Conservas", "Azúcar y Endulzantes", 
    "Papel Higiénico", "Papeles", "Carne Vacuna", "Pollo y Aves", "Cervezas", "Licores", "Chocolates", "Dulcería", 
    "Snacks", "Galletitas", "Carnes y Aves Congeladas", "Platos Preparados y Empanadas", "Guarniciones y Verduras Congeladas", 
    "Postres y Dulces Congelados", "Pescados Congelados", "Vajilla Descartable", "Utensilios de Cocina", "Electrodomésticos", 
    "Vinos", "Espumosos", "Quesos", "Fiambres", "Limpieza", "Botiquín", "Alimentos", "Bebidas", "Higiene Femenina", 
    "Jabones y limpieza", "Cuidado Oral"
  ];

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto agregado:', producto);
    // Aquí puedes hacer una petición a la API para guardar el producto
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
      <div className="product-container p-4 border rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="display-6 text-center">Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="nombre">Nombre del Producto</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Introduce el nombre"
              value={producto.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              placeholder="Introduce el precio"
              value={producto.precio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="supermercado">Supermercado</label>
            <input
              type="text"
              className="form-control"
              id="supermercado"
              name="supermercado"
              placeholder="Introduce el supermercado"
              value={producto.supermercado}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              name="fecha"
              value={producto.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="categoria">Categoría</label>
            <select
              className="form-control"
              id="categoria"
              name="categoria"
              value={producto.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Agregar Producto
          </button>
        </form>
      </div>
      <div className="text-center mt-4">
        <a href="/" className="btn btn-secondary">
          Volver a la página principal
        </a>
      </div>
    </div>
  );
}

export default AgregarProducto;

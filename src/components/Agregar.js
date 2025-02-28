import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AgregarProducto() {
  const [producto, setProducto] = useState({
    nombre: '',
    marca: '',
    descripcion: '',
    categoria: '',
    imagenUrl: ''
  });

  const [categorias, setCategorias] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Asumo que guardaste el token al loguearte

  
  useEffect(() => {
    if (!token) {
      alert('Debes iniciar sesión.');
      navigate('/login');
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el JWT
      console.log("Payload decodificado:", payload);
      if (payload.roles !== 'ADMIN') {
        alert('Acceso denegado. Solo un administrador puede agregar productos.');
        navigate('/');
        return;
      }
      setIsAdmin(true); // ✅ Es admin, puede ver el formulario
    } catch (error) {
      console.error('Error al procesar el token:', error);
      alert('Error al validar el token. Inicia sesión nuevamente.');
      navigate('/login');
    }
  }, [token, navigate]);
  
  // Carga las categorías
  useEffect(() => {
    axios.get('http://localhost:8080/categorias')
      .then(response => {
        setCategorias(response.data);  // Suponiendo que el endpoint devuelve un array de objetos con id y nombre
      })
      .catch(error => {
        console.error('Error al obtener categorías', error);
        setMensaje('Error al cargar las categorías.');
      });
  }, []);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nuevoProductoDTO = {
      nombreProducto: producto.nombre,
      marca: producto.marca,
      descripcion: producto.descripcion,
      categoriaId: parseInt(producto.categoria),
      imagenUrl: producto.imagenUrl,
    };

    try {
      const response = await axios.post('http://localhost:8080/productos/agregar', 
        nuevoProductoDTO,
        {
          headers: {
            Authorization: `Bearer ${token}`, // 🔐 Agrega el token
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Producto agregado con éxito:', response.data);
      setMensaje('Producto agregado correctamente.');
      setProducto({
        nombre: '',
        marca: '',
        descripcion: '',
        categoria: '',
        imagenUrl: ''
      });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setMensaje('Error al agregar el producto. Verifica los datos o el token.');
    }
  };

   // Si no es admin, no muestra nada (o podrías poner un mensaje)
   if (!isAdmin) {
    return null;  // 👈 Evita que cargue el formulario si no es admin
  }


  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
      <div className="product-container p-4 border rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="display-6 text-center">Agregar Producto</h2>
        {mensaje && <div className="alert alert-info">{mensaje}</div>}
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
            <label htmlFor="marca">Marca</label>
            <input
              type="text"
              className="form-control"
              id="marca"
              name="marca"
              placeholder="Introduce la marca"
              value={producto.marca}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              placeholder="Introduce la descripcion"
              value={producto.descripcion}
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
              {categorias.map((cat) => (
                <option key={cat.categoriaId} value={cat.categoriaId}>
                {cat.nombreCategoria}
              </option>
            ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="imagenUrl">Url de la imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagenUrl"
              name="imagenUrl"
              placeholder="Introduce la url"
              value={producto.imagenUrl}
              onChange={handleChange}
              required
            />
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

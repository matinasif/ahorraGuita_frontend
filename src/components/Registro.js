import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Registro() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rol: ''
  });

  const [roles, setRoles] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Obtenemos los roles desde la API
    axios.get('http://localhost:8080/roles')
      .then(response => {
        setRoles(response.data);  // Suponiendo que la respuesta tiene un array de roles
      })
      .catch(error => {
        console.error('Error al obtener roles', error);
        setMensaje('❌ Error al cargar roles. Intenta nuevamente.');
      });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(''); // Limpiar mensaje anterior

    try {
      const response = await axios.post('http://localhost:8080/auth/register', form);
      setMensaje('✅ Usuario registrado correctamente. Redirigiendo...');

      setTimeout(() => {
        window.location.href = '/login';  // Redirige a la página de login
      }, 2000);

    } catch (error) {
      console.error('Error al registrar usuario:', error);
      const mensajeError = error.response?.data?.mensaje || '❌ Error al registrar el usuario.';
      setMensaje(mensajeError);
    }
  };

  return (
    <div className="container flex-column justify-content-center align-items-center mt-5 pt-5">
      <div className="register-container">
        <h2 className="display-5">Registrarse</h2>
        {mensaje && <div className={`alert ${mensaje.startsWith('✅') ? 'alert-success' : 'alert-danger'}`}>
          {mensaje}
        </div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label htmlFor="email">Correo Electrónico (Username)</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Introduce tu correo"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Introduce tu contraseña"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="rol">Rol</label>
            <select
              className="form-control"
              id="rol"
              name="rol"
              value={form.rol}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un rol</option>
              {roles.map((rol) => (
                <option key={rol.rolId} value={rol.rolId}>
                  {rol.nombreRol}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4">
            Registrarse
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </div>

      {/* Botón para volver a la página principal al final */}
      <div className="container text-center mt-4">
        <a href="/" className="btn btn-secondary">
          Volver a la página principal
        </a>
      </div>
    </div>
  );
}

export default Registro;

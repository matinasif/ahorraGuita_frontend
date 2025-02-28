import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Necesitás instalarlo: npm install jwt-decode


function Login() {
  const [form, setForm] = useState({
    userEmail: '',
    userPassword: ''
  });

  const [mensaje, setMensaje] = useState('');

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
      const response = await axios.post('http://localhost:8080/auth/login', form);
      const token = response.data;

      localStorage.setItem('token', token); // 🔐 Guardar token en localStorage

       // ✅ Decodificar el token para extraer el rol y guardarlo
       const decodedToken = jwtDecode(token);
       const rol = decodedToken.roles;  // Asumimos que el claim es "roles"
       localStorage.setItem('rol', rol);  // Guardar el rol para usarlo después

      setMensaje('✅ Login exitoso. Redirigiendo...');

      setTimeout(() => {
        window.location.href = '/Home';  // Cambiá esto según tu ruta
      }, 2000);

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      const mensajeError = error.response?.data?.mensaje || '❌ Error al iniciar sesión. Verificá tus credenciales.';
      setMensaje(mensajeError);
    }
  };

  return (
    <div className="container flex-column justify-content-center align-items-center mt-5 pt-5">
      <div className="login-container">
        <h2 className="display-5">Iniciar Sesión</h2>
        {mensaje && <div className={`alert ${mensaje.startsWith('✅') ? 'alert-success' : 'alert-danger'}`}>
          {mensaje}
        </div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label htmlFor="userEmail">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              name="userEmail"
              placeholder="Introduce tu correo"
              value={form.userEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userPassword">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              name="userPassword"
              placeholder="Introduce tu contraseña"
              value={form.userPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Entrar
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#">¿Olvidaste tu contraseña?</a>
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

export default Login;

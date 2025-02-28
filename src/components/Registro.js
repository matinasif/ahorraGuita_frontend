import React, { useState} from 'react';
import axios from 'axios';

function Registro() {
  const [form, setForm] = useState({
    userFirstname: '',
    userLastname: '',
    userEmail: '',
    userPassword: '',
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

    // Si querés mandar un rol explícito, podés incluirlo en el form (por ejemplo, rolId o nombreRol)
    const formConRol = {
      ...form,
      rol: 'USER' // 🔐 Esto se ignora  ya lo msi el backendaneja, pero es buena práctica si más adelante lo querés cambiar
    };


    try {
      const response = await axios.post('http://localhost:8080/auth/nuevoUsuario', form);
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
            <label htmlFor="userFirstname">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="userFirstname"
              name="userFirstname"
              placeholder="Introduce tu nombre"
              value={form.userFirstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="userLastname">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="userLastname"
              name="userLastname"
              placeholder="Introduce tu apellido"
              value={form.userLastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
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

          <div className="form-group mt-3">
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

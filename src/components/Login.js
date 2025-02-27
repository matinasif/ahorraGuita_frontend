// src/components/Login.js
import React from 'react';

function Login() {
  return (
    <div className="container flex-column justify-content-center align-items-center mt-5 pt-5">
      <div className="login-container">
        <h2 class="display-5">Iniciar Sesión</h2>
        <form>
          <div className="form-group mt-5">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Introduce tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Introduce tu contraseña"
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


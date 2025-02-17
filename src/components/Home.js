import React from 'react';

function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4">Ahorra Guita</h1>
        <p className="lead">Encontra el mejor precio para tu producto fácilmente</p>
        
        {/* Área de búsqueda */}
        <div className="input-group mb-3" style={{ maxWidth: '600px' }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar..." 
            aria-label="Buscar" 
            aria-describedby="button-addon2" 
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" id="button-addon2">
              Buscar
            </button>
          </div>
        </div>
        
        {/* Enlace para iniciar sesión */}
        <p className="mt-3">
          <a href="/login" className="text-muted">
            ¿No tienes cuenta? Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
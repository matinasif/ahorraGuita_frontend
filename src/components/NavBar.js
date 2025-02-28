import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Asegurate de tener instalada la librería: npm install jwt-decode


const NavBar = ({ onLogoClick }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log("Token decodificado:", decodedToken); // 👀 Para debuggear
        if (decodedToken.roles === "ADMIN") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Te redirige al login tras cerrar sesión
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Botón de regreso al inicio y limpiar la búsqueda */}
        <Navbar.Brand as={Link} to="/" className="lead fw-bold" onClick={onLogoClick}>
          Ahorra Guita
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav" className="justify-content-end lead">
          <Nav>
            {!token ? (
              // Mostrar "Iniciar Sesión" si NO hay token
              <Nav.Link as={Link} to="/login">
               <Button variant="light" size="sm" className="btn-nav">Iniciar Sesión</Button>
              </Nav.Link>
            ) : (
              // Mostrar "Cerrar Sesión" si HAY token
              <Nav.Link>
              <Button variant="danger" size="sm" className="btn-nav" onClick={handleLogout}>Cerrar Sesión</Button>
              </Nav.Link>
            )}

            {/* Mostrar "Ingresar un Precio" solo si es ADMIN */}
            {isAdmin && (
              <Nav.Link as={Link} to="/agregar">
              <Button variant="warning" size="sm" className="btn-nav">Ingresar un Producto</Button>
</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

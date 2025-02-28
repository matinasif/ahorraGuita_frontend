import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ onLogoClick }) => {
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
            <Nav.Link as={Link} to="/login">
              <Button variant="light" size="sm">Iniciar Sesión</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/agregar">
              <Button variant="warning" size="sm">Ingresar un Precio</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

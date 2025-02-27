import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBarTemp";
import ProductList from "./ProductList";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar"; // Asegúrate de que la ruta es correcta

function Home() {
  const [productos, setProductos] = useState([]);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Función para limpiar la búsqueda (productos)
  const clearSearch = () => {
    setProductos([]);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <NavBar onLogoClick={clearSearch} /> {/* Pasamos la función clearSearch */}
      <Container className="d-flex flex-column justify-content-center align-items-center text-center mt-5 pt-5 ">
      <div class="text-center">
            <h1 class="display-4">Ahorra Guita</h1>
            <p class="lead">Encontra el mejor precio para tu producto fácilmente</p>
      </div>
        <SearchBar onResults={setProductos} />
        <ProductList productos={productos} />
      </Container>
    </div>
  );
}

export default Home;

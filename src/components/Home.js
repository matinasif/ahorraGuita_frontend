import React from 'react';
import SearchBar from "./searchbar";
import ProductList from "./ProductList";
import { Container } from "react-bootstrap";
import  { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <Container>
    <h1 className="text-center mt-4">AhorraGuita</h1>
    <SearchBar onSearch={setQuery} />
    <ProductList query={query} />
  </Container>
  );
}

export default Home;
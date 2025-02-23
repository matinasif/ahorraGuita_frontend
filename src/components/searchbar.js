import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Buscar producto..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="me-2"
            />
            <Button variant="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;

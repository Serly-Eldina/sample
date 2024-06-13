import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="navbar-wrapper"> {/* Tambahkan wrapper untuk navbar */}
        <Navbar className="navbar" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#article">Article</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Your other content */}
    </div>
  );
}

export default App;

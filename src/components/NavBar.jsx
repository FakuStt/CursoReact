//componente navbar que contenga brandt(titulo o nombre de la tienda), listado de categorias clickeabls y librerias de estilo con bs o jack
// crear componente CartWidget con icono y numero fijo y darle estilo con bs

import React from 'react' 
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OjalaMacetas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Ayuda</Nav.Link>
          </Nav>

          <CartWidget/>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
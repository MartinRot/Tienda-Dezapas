import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

console.log("Hola desde NavBar");

export const NavBar = () => {
    
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="home">DEZAPAS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="ZAPATILLAS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Hombre</NavDropdown.Item>
                            <NavDropdown.Item href="#">Mujer</NavDropdown.Item>
                            <NavDropdown.Item href="#">Niño</NavDropdown.Item>
                            <NavDropdown.Item href="#">Todo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Novedades</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">LANZAMIENTO</Nav.Link>
                        <Nav.Link href="#pricing" className="title-red">SALES</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#">INICIAR SESION</Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                        CARRITO
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
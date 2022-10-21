import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../images/Logo/logoCayena2.png"
import "./NavBar.css"

const NavBar = () => {
    return (
        <Navbar className="encabezado" collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top rounded-circle img-thumbnail encabezado__logo"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto encabezado__menu">
                        <Nav.Link as={Link} to='/'>Nuestros Productos</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/diet'>Alimentos Dietéticos</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/celiacos'>Para Celíacos</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/diabeticos'>Para Diabéticos</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/salud_belleza'>Salud y Belleza</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../images/Logo/logoCayena2.png"

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Cayena
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#productos">Nuestros Productos</Nav.Link>
                    <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
                    <Nav.Link href="#consultorio">Consultorio</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;
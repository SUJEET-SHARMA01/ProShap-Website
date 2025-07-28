import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ opacity: 0.9 }}
    >
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo1} alt="" /> ProShop
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart /> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link eventKey={2}>
                <FaUser /> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

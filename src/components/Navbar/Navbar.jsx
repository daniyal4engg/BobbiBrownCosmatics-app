import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { SignIn } from "../Pages/SignIn";
import { Shop } from "./NavbarButtons/Shop";
import { Search } from "./NavbarButtons/Search";
import { Learn } from "./NavbarButtons/Learn";
import { BsFillCartCheckFill } from "react-icons/bs";
export const NavbarSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {/* <Link to="/">Shop</Link> */}
          <Shop />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Learn />
            </Nav.Link>
            <Nav.Link>
              {/*Seach nav bar */}
              <Search />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/signup">SignUP</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/signin">SignIn</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/cart">
                <BsFillCartCheckFill />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

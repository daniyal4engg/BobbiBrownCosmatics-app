import "../styles/navbar.css";

import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { SignIn } from "../Pages/SignIn";
import { Shop } from "./NavbarButtons/Shop";
import { Search } from "./NavbarButtons/Search";
import { Learn } from "./NavbarButtons/Learn";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useCart } from "react-use-cart";
import { useAuth } from "../Pages/Context/Auth";

export const NavbarSection = () => {
  // cart quantity
  const { totalUniqueItems } = useCart();
  // private Routes
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixNavbar"
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link>
            <Link to="/" className="goToHome">
              Home
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Brand>
          {/* <Link to="/">Shop</Link> */}
          <Shop />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" marginRight="30px">
            <Nav.Link>
              <Learn />
            </Nav.Link>
            <Nav.Link>
              {/*Seach nav bar */}
              <Search />
            </Nav.Link>
          </Nav>
          <Nav className="whiteText">
            <Nav.Link>
              <Link to="/signup">SignUp</Link>
            </Nav.Link>

            {!auth.user ? (
              <Nav.Link eventKey={2}>
                <Link to="/login">SignIn</Link>
              </Nav.Link>
            ) : (
              <button className="whiteText" onClick={handlelogout}>
                Logout
              </button>
            )}
            <Nav.Link eventKey={2} marginLeft="10px">
              <Link to="/cart">
                <BsFillCartCheckFill size={25} className="cartParent" />
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/cart" className="cartChild">
                ( {totalUniqueItems} )
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

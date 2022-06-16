import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/signup">SignUP</Link>
//       <Link to="/signin">SignIn</Link>
//     </div>
//   );
// };

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Learn</Nav.Link>
            <Nav.Link>Search</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Link to="/signup">SignUP</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link to="/signin">SignIn</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

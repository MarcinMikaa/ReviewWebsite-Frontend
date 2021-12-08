import "./NavbarComp.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComp() {
  return (
    <div className="navbar-comp">
      <Navbar bg="white" expand="lg" fixed="top" className="navabr">
        <Container fluid>
          <Nav.Link as={Link} to="/register">
            <p>Home</p>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Nav>
              <Nav.Link as={Link} to="/register">
                <p>Register</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <p>Login</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

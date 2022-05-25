import "./NavbarComp.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import AnonymousUserNav from "../AnonymousUserNav/AnonymousUserNav.js";
import LoggedUserNav from "../LoggedUserNav/LoggedUserNav.js";

function NavbarComp() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <div className="navbar-comp">
      <Navbar expand="lg" fixed="top" variant="dark" bg="light" className="navbar">
        <Container fluid>
          <Nav.Link as={Link} to="/">
            <img src={logo} alt="logo" height="70" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            {user ? <LoggedUserNav isAdmin={user.isAdmin} /> : <AnonymousUserNav />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome, FaInfoCircle, FaEnvelope, FaGithub } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="py-2 shadow-lg"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <MdSportsCricket className="me-2 text-warning" size={28} />
            <span className="fw-bold fs-4">CricBot</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto fw-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning d-flex align-items-center"
                    : "nav-link text-light d-flex align-items-center"
                }
              >
                <FaHome className="me-1" /> Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning d-flex align-items-center"
                    : "nav-link text-light d-flex align-items-center"
                }
              >
                <FaInfoCircle className="me-1" /> About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning d-flex align-items-center"
                    : "nav-link text-light d-flex align-items-center"
                }
              >
                <FaEnvelope className="me-1" /> Contact
              </NavLink>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-warning d-flex align-items-center"
                    : "nav-link text-light d-flex align-items-center"
                }
              >
                <FaGithub className="me-1" /> GitHub
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "60px" }} />
    </>
  );
}

export default Header;

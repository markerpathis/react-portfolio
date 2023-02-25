import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  card: {
    margin: 20,
  },
  heading: {
    background: "#e3f2fd",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "1.2rem",
    color: "black",
    padding: "0 20px",
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.card}>
      <Navbar expand="sm" style={styles.heading}>
        <Navbar.Brand>Parker Mathis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "nav-link active" : "nav-link"}>
              About Me
            </Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

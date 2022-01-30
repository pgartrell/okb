import React from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBarLinks">
            <NavLink to="/landingPage">Landing</NavLink>
            <NavLink to="/mobileClinicPage">Mobile Clinic</NavLink>
            <NavLink to="/onlineTherapyPage">Online Therapy</NavLink>
            <NavLink to="/resourcesPage">Resources</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

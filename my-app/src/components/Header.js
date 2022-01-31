import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand,
  Button
} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import LogoImage from '../images/new-okb-logo.png';

const Header = () => {
  return (
    <Navbar className="custom-navbar" bg="light" variant="light" sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="#">
            <img
              src={LogoImage}
              height={50}
            />
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBarLinks">
            <NavLink className="items-navigation" to="/landingPage">Home</NavLink>
            <NavLink className="items-navigation" to="/mobileClinicPage">Mobile Clinic</NavLink>
            <NavLink className="items-navigation" to="/onlineTherapyPage">Online Therapy</NavLink>
            <NavLink className="items-navigation" to="/resourcesPage">Resources</NavLink>
            <NavLink className="items-navigation" to="#">
              <Button className="btn btn-danger">Donate</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


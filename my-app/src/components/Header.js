import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand
} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom"
import LogoImage from '../images/new-okb-logo.png';

const Header = () => {
  return (
    <Navbar className="custom-navbar" transparent bg="light" sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="./LandingPage">
            <img className='navbar-logo' src={LogoImage} alt="okb logo"/>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                <NavLink to="/aboutPage" className="items-navigation">About</NavLink>
                <NavLink to="workWithUsPage" className="items-navigation">Work With Us</NavLink>
            </Nav>
                <Link to="/donatePage">
                    <button className="btn-okb-primary">Donate</button>
                </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

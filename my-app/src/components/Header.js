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
  const [colorChange, setColorChange] = React.useState(false);
  const changeNavbarColor = () => {
    if(window.scrollY >= 40) {
      setColorChange(true);
    }
    else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Navbar className="custom-navbar" transparent bg={colorChange ? "light": ""} sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="./LandingPage">
            <img className='navbar-logo' src={LogoImage}/>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                <NavLink className="items-navigation" to="#">About</NavLink>
                <NavLink className="items-navigation" to="#">Work With Us</NavLink>
            </Nav>
                <button className="btn-navbar">Donate</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

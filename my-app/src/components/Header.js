import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand
} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import LogoImage from '../images/new-okb-logo.png';

const Header = () => {
  const [colorChange, setColorChange] = React.useState(false);
  const changeNavbarColor = () => {
    if(window.scrollY >= 10) {
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
            <img className='navbar-logo' src={LogoImage} alt="okb logo"/>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                <NavLink to="/aboutPage" className="items-navigation">About</NavLink>
                <NavLink to="workWithUsPage" className="items-navigation">Work With Us</NavLink>
            </Nav>
                <button className="btn-okb-primary">Donate</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

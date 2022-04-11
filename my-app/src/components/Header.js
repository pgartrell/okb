import React from "react";
import { 
  Container,
  Navbar, 
  Nav,
  NavbarBrand, Row
} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom"
import LogoImage from '../images/new-okb-logo.png';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  );
}


const Header = () => {
  return (
    <Navbar className="custom-navbar" transparent bg="light" sticky="top" expand="lg">
      <Container fluid>  
        <NavbarBrand href="/">
            <img className='navbar-logo' src={LogoImage} alt="okb logo"/>
        </NavbarBrand>     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navBarLinks">
                <NavLink to="/aboutPage" className="items-navigation">About</NavLink>
                <NavLink to="workWithUsPage" className="items-navigation">Work With Us</NavLink>
                <NavLink to="impactPage" className="items-navigation">Our Impact</NavLink>
            </Nav>
                <Link to="/donatePage">
                    <button className="btn-okb-primary">Donate</button>
                </Link>
        </Navbar.Collapse>
      </Container>
      <Row>
        <Breadcrumbs />
        </Row>
    </Navbar>
  );
};

export default Header;

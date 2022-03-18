import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
//import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron, JumbotronContainer } from "../styles/HomeHeroSection.styles.js"


const HomeHeroSection = () => {
  return (
    <Container className="homehero-container" fluid>
      <Row>
        <Col>
          <h2 className="homehero-title">Ghana Services</h2>
          <p className="homehero-subtitle">This will hold text about Ghana Services</p>      
        </Col>
      </Row>
    </Container>
  );
};

export default HomeHeroSection;


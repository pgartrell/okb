import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GhanaImage from '../images/ghana-image.jpeg';


export default function AboutOurMission() {
    return (
        <Container className="about-mission-container bg-light" fluid>
            <Row>
                <Col>
                    <img src={GhanaImage} alt="Ghana" className="about-mission-image"/>
                    <h2 className="about-mission-title">Our Mission for Better</h2>
                    <p className="about-mission-text contain-text">To transform healthcare provision in Ghana through collaborative education, cutting-edge research, and patient-centered care.</p>
                    <button className="btn-okb-primary">See Our Impact</button>
                </Col>
            </Row>
        </Container>
    );
}
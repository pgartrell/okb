import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {Link} from "react-router-dom"
import Ghana from '../images/ghana-country.png';

export default function AboutOurVision() {
    return (
        <Container className="about-vision-container">
            <Row>
                <Col>
                    <img src={Ghana} alt="Ghana" className="about-vision-image"/>
                    <h2 className="about-vision-title">Our Vision for Ghana</h2>
                    <p className="about-vision-text">To ensure that equitable and quality healthcare is accessible to all Ghanaians</p>
                    <Link to="/workWithUsPage"><button className="btn-okb-primary">See How We Do It</button></Link>
                </Col>
            </Row>
        </Container>
    );
}
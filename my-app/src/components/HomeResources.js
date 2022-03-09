import React from 'react';
import { 
    Container, 
    Row, 
    Col
} from "react-bootstrap";
import {Link} from "react-router-dom"

export default function HomeResources() {
    return (
        <Container className="homeresources-container">
            <Row>
                <Col>
                    <h1 className="homeresources-title">Resources</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/mobileClinicPage'><button href="#" className="btn-okb-primary">Mobile Clinic</button></Link>
                    <Link to='/onlineTherapyPage'><button href="#" className="btn-okb-primary">Online Therapy</button></Link>
                </Col>
            </Row>
        </Container>
    );
}
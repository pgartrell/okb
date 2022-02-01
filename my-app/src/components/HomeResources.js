import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Button
} from "react-bootstrap";

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
                    <Button href="./MobileClinicPage" className="homeresources-btn" variant="danger">Mobile Clinic</Button>
                    <Button href="./OnlineTherapyPage" className="homeresources-btn" variant="danger">Online Therapy</Button>
                </Col>
            </Row>
        </Container>
    );
}
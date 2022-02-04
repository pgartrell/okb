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
                    <button href="#" className="homeresources-btn">Mobile Clinic</button>
                    <button href="#" className="homeresources-btn">Online Therapy</button>
                </Col>
            </Row>
        </Container>
    );
}
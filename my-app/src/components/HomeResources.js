import React from 'react';
import { 
    Container, 
    Row, 
    Col
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
                    <button href="#" className="btn-okb-primary">Mobile Clinic</button>
                    <button href="#" className="btn-okb-primary">Online Therapy</button>
                </Col>
            </Row>
        </Container>
    );
}
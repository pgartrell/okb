import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NeedYourHelp() {
    return (
        <Container className="donation-need-container" fluid>
            <Row>
                <Col>
                    <h2 className="donation-need-title">We Need Your Help</h2>
                    <Link to="/workWithUsPage">
                        <button className="btn-okb-secondary">Become a Volunteer</button>
                    </Link>
                </Col>
            </Row>
        </Container>

    );
}
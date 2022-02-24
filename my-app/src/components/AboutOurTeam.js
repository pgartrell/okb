import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function AboutOurTeam() {
    return (
            <Container className="about-team-container" fluid>
                <Row>
                    <Col xs={12}>
                        <h1 className="about-team-title">Our Wonderful Team</h1>
                        <p className="about-team-text">Our Medical Staff, Students, Volunteers, Health workers, Administrators, Board Members and everyone else that impacts our organization, Thank you!</p>
                        <button className="btn-okb-clear">Meet The Team</button>
                    </Col>
                </Row>
            </Container>
    );
}
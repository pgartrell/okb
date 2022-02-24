import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function AboutOurTeam() {
    return (
            <Container className="about-team-container" fluid>
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        <h1 className="about-team-title">Our Wonderful Team</h1>
                        <p className="about-team-text">Our Medical Staff, Students, Volunteers, Health workers, Administrators, Board Members and everyone else that impacts our organization, Thank you!</p>
                        <button className="btn-okb-clear">Meet The Team</button>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="about-team-title">Be a part of the change</h1>
                        <p className="about-team-text">You can make a difference by supporting our mission for a better Ghana and a better world.</p>
                        <button className="btn-okb-primary">Donate</button>
                        <button className="btn-okb-secondary">Volunteer</button>
                    </Col>
                </Row>
            </Container>
    );
}
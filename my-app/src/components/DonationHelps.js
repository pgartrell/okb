import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function DonationHelps() {
    return (
        <Container className="donation-helps-container" fluid>
            <Row>
                <Col md={6}>
                    <h2 className="donation-helps-title">How Your Donation Helps</h2>
                </Col>
                <Col md={6}>
                    <ul className="donation-helps-list">
                        <li className="donation-helps-list-item">It brings medical supplies for health screenings.</li>
                        <li className="donation-helps-list-item">It empowers patients throughout Ghana.</li>
                        <li className="donation-helps-list-item">It initiates projects that better the lives of communities.</li>
                        <li className="donation-helps-list-item">It provides health education to the people of Ghana.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-muted donation-helps-text">OKB Hope Foundation is a 501(c)3 not-for profit organization, this means that we rely on donations from people like you to achieve our mission of making quality healthcare accessible throughout Ghana.</p>
                </Col>
            </Row>
        </Container>
    );
}
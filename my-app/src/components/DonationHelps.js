import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function DonationHelps() {
    return (
        <Container className="donation-helps-container">
            <Row>
                <Col xs={12} md={6}>
                    <h2 className="donation-helps-title">How Your Donation Helps</h2>
                </Col>
                <Col xs={12} md={6}>
                    <ul className="donation-helps-list">
                        <li>It brings medical supplies for health screenings.</li>
                        <li>It empowers patients throughout Ghana.</li>
                        <li>It initiates projects that better the lives of communities.</li>
                        <li>It provides health education to the people of Ghana.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p className="donation-helps-text">OKB Hope Foundation is a 501(c)3 not-for profit organization, this means that we rely on donations from people like you to achieve our mission of making quality healthcare accessible throughout Ghana.</p>
                </Col>
            </Row>
        </Container>
    );
}
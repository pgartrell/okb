import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import {Link} from "react-router-dom"



export default function AboutOurTeam() {
    return (
            <Container className="about-team-container" fluid>
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        <h1 className="about-team-title">Our Wonderful Team</h1>
                        <p className="about-team-text">Our Medical Staff, Students, Volunteers, Health workers, Administrators, Board Members and everyone else that impacts our organization, Thank you!</p>

                        <Link to="/workWithUsPage"><button className="btn-okb-clear">Meet The Team</button></Link>

                        <Link to='/DoctorsPage'><button className="btn-okb-clear">Meet The Team</button></Link>

                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="about-team-title">Be a part of the change</h1>
                        <p className="about-team-text">You can make a difference by supporting our mission for a better Ghana and a better world.</p>

                        <Link to="/donatePage"><button className="btn-okb-primary">Donate</button></Link>
                        <Link to="/VolunteerApplicationsPage"><button className="btn-okb-secondary">Volunteer</button></Link>


                    </Col>
                </Row>
            </Container>
    );
}
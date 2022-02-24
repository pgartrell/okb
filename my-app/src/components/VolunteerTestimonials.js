import * as React from 'react';
import { VolunteerAvatarImage } from '../styles/VolunteerTestimonialStyles.styles.js';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { VOLUNTEERS } from '../shared/volunteers';

const volunteerTestimonials = VOLUNTEERS.map(volunteer => {
  return (
    <Col md="4">
      <Card className='volunteer-avatar-card'>
        <VolunteerAvatarImage src={volunteer.image} alt={volunteer.alt} />
        <h2>
          {volunteer.name}
        </h2>
        <h6 className="volunteer-subcaption m-1">
          Student at {volunteer.school}
        </h6>
        <p className="volunteer-statement m-1">
          {volunteer.statement}
        </p>
      </Card>
    </Col>
  )
});

export default function VolunteerTestimonials() {
    return (
      <Container className="testimonial-section">
        <Row>
          <h1 className="testimonial-title m-3">
            Volunteer Testimonials
          </h1>
        </Row>
        <Row className="m-1">
          {volunteerTestimonials}
        </Row>
      </Container>
    );
}
import React from "react";
import { THERAPYHOWITWORKSDATA } from "../data/therapyhowitworksdata";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/HowItWorksMobile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function TherapyHowItWorks() {
  const [therapyhowItWorksData] = React.useState(THERAPYHOWITWORKSDATA);

  const RenderHowItWorks = therapyhowItWorksData.map((data) => {
    return (
      <Col xs={12} sm={6} md={3}>
        <Card className="therapy-card" border='white'>
          <Card.Body>
          <FontAwesomeIcon icon={data.img} size='5x' className='fontawesome-icon'/>
            <Card.Title variant="primary">{data.step}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container className="therapy-works-container">
      <Row>
        <h1 className="works-mobile-title">How It Works</h1>
      </Row>
      <Row>
        {RenderHowItWorks}
      </Row>
      <hr/>
    </Container>
  );
}
import React from "react";
import { HOWITWORKSDATA } from "../data/howitworksdata";
import { Card, Container, Row, Col } from "react-bootstrap";
import HowItWorksImage from "../images/doctor.jpeg";
import "../styles/HowItWorksMobile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function HowItWorksMobile() {
  const [howItWorksData] = React.useState(HOWITWORKSDATA);

  const RenderHowItWorks = howItWorksData.map((data) => {
    return (
      <Col>
        <Card border='white'>
          <Card.Body>
          <FontAwesomeIcon icon={data.img} size='5x' className='fontawesome-icon'/>
            <Card.Title variant="primary">{data.step}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      // <Col className='howItWorksContainer' xs={{span: 6, offset: 3}} md={{span: 4, offset: 0}} lg={{span: 3, offset: 0}} xl={{span: 3}} xxl={{span: 2}}>
      //     <Card style={{margin: '.5em'}}>
      //         <Card.Img variant='top' src={HowItWorksImage}/>
      //         <Card.Body>
      //             <Card.Title variant='primary'>{data.step}</Card.Title>
      //             <Card.Text>{data.description}</Card.Text>
      //         </Card.Body>
      //     </Card>
      // </Col>
    );
  });
  return (
    <Container>
      <Row>
        <h1 className="works-mobile-title">How It Works</h1>
      </Row>
      <Row xs={1} sm={2} md={3} lg={3} xl={5}>
        {RenderHowItWorks}
      </Row>
    </Container>
  );
}

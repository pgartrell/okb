import React from 'react';
import { HOWITWORKSDATA } from '../data/howitworksdata';
import { Card, Container, Row, Col } from 'react-bootstrap';
import HowItWorksImage from '../images/doctor.jpeg';


export default function HowItWorksMobile() {
    const [howItWorksData] = React.useState(HOWITWORKSDATA);
    const RenderHowItWorks = howItWorksData.map(data => {
        return (
            <Col>
                <Card style={{ margin: '1em', width: '15rem'}}>
                    <Card.Img variant='top' src={HowItWorksImage}/>
                    <Card.Title style={{padding: '.5em'}}>{data.step}</Card.Title>
                    <Card.Text style={{paddingBottom: '1em'}}>{data.description}</Card.Text>
                </Card>
            </Col>
        );
    })
    return (
            <Container>
                <Row>
                    <h1 className="works-mobile-title">How It Works</h1>
                </Row>
                <Row>
                    {RenderHowItWorks}
                </Row>
            </Container>
    );
}
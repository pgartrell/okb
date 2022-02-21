import React from 'react';
import { Container, Row, Col, Ratio } from 'react-bootstrap'

export default function AboutFoundersStory() {
    return (
        <Container className="founders-container bg-light" fluid>
            <Row>
                <Col xs={12}>
                    <h2 className="founders-title">Our Founder's Story</h2>
                </Col>
                <Col 
                sm={{span: 10, offset: 1}}
                md={{span: 8, offset: 2}}
                lg={{span: 8, offset: 2}}
                xl={{span: 6, offset: 3}}
                xxl={{span: 4, offset: 4}}
                >
                    <Ratio aspectRatio="4x3">
                        <iframe 
                            src='https://www.youtube.com/embed/rna_9-68Ny8'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title="Founder's Story"
                        />
                    </Ratio>
                </Col>
            </Row>
        </Container>
    );
}
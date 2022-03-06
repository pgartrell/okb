import React from 'react';
import { DonateJumbotronContainer, DonateHeroTitle, DonateTitleContainer, DonateHeroSubitle } from '../styles/DonateHero.styles.js';
import { Row, Col } from 'react-bootstrap';

export default function DonateHero() {
    return (
        <DonateJumbotronContainer>
            <DonateTitleContainer>
                <Row>
                    <Col xs="10" md="8" lg="6">
                        <DonateHeroTitle>
                            Make a Difference
                        </DonateHeroTitle>    
                        <DonateHeroSubitle>
                            Our mission is to transform healthcare through real-time treatment for 35 million Ghanaians by providing life-saving solutions and innovative public health programs.
                        </DonateHeroSubitle>
                    </Col>
                    <Col></Col>
                </Row>
            </DonateTitleContainer>
        </DonateJumbotronContainer>
    );
}
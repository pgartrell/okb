import React from 'react';
import { ImpactJumbotronContainer, ImpactHeroTitle, ImpactTitleContainer } from '../styles/ImpactHero.styles.js';
import { Row, Col } from 'react-bootstrap';

export default function ImpactHero() {
    return (
        <ImpactJumbotronContainer>
            <ImpactTitleContainer>
                <Row>
                    <Col xs="6" md="12">
                        <ImpactHeroTitle>
                            Our Impact
                        </ImpactHeroTitle>    
                    </Col>
                </Row>
            </ImpactTitleContainer>
        </ImpactJumbotronContainer>
    );
}
import React from "react";
import { Container, Col, Row } from "react-bootstrap";


export default function OurImpactCards() {
    return (
        <Container className="m-3">
            <Row className="m-3">
                <Col xs={12} md={6} lg={4}>
                    <img src="./assets/images/LifeSavingTreatments.jpg" />
                </Col>
                <Col>
                    <h1 className="m-2 impact-cards impact-card-title">
                        Life Saving Treatment
                    </h1>
                    <p className="m-2 impact-cards">
                        We provided free transformative healthcare services to Ayigya, Susanso, Ejisu, and Ejura Communities. These services include whole health assessment and life-saving medicine for conditions such as hypertension and diabetes supplied in real time, eye examination and eyeglasses dispensing on the spot, and urgent dental evaluation and treatment.
                    </p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={12} md={6} lg={4}>
                    <img src="./assets/images/MalariaPrevention.jpg" />
                </Col>
                <Col>
                    <h1 className="m-2 impact-cards impact-card-title">
                        Malaria Prevention
                    </h1>
                    <p className="m-2 impact-cards">
                        We donated hundreds of mosquito repellents to female head porters, commonly known as Kayayei. These women travel from the Northern part of Ghana to the Southern region in search of better economic opportunities. However, they face many hardships due to the language barrier, and typically do not have family to take care of them. As a result, many must reside in open areas in marketplaces. We donated mosquito repellents with the aim of mitigating the rate of malaria within this population.
                        </p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={12} md={6} lg={4}>
                    <img src="./assets/images/CleanWater.jpg" />
                </Col>
                <Col>
                    <h1 className="m-2 impact-cards impact-card-title">
                        Clean Water & Sanitation
                    </h1>
                    <p className="m-2 impact-cards">
                        We provided free portable water for the Nweneso Community in Kumasi-Ghana (population of 2,916). The Nweneso Community was experiencing a high incidence rate of cholera and dysentery, due to the lack of a portable water source. Our efforts were aimed at mitigating the rate of these diseases through the provision of portable water.
                        </p>
                </Col>
            </Row>
        </Container>
    )
}
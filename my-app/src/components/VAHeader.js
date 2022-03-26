import React from "react";
import { VAHeroTitle, VAJumbotronContainer, VATitleContainer } from "../styles/VAHeader.styles";
import { Row, Col } from "react-bootstrap";

const VAHeader = () => {
  return (
    <VAJumbotronContainer>
      <VATitleContainer>
        <Row>
          <Col xs="6" md="12">
            <VAHeroTitle>Volunteer Application</VAHeroTitle>
          </Col>
        </Row>
      </VATitleContainer>
    </VAJumbotronContainer>
  );
};

export default VAHeader;

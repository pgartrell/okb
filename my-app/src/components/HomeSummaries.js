import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import testDoctorImage from "../images/testDoctorImage.jpg";
import "../styles/HomeSummaries.css"
import {Link} from "react-router-dom"



export default function HomeSummaries() {
  const [summaries] = useState([
    {
      title: "Mobile Clinic",
      text: "This will explain the mobile clinic",
      img: testDoctorImage,
      href: "/mobileClinicPage",
      href: "/appointmentpage",
    },

    {
      title: "Online Therapy",
      text: "This will explain the online Therapy",
      img: testDoctorImage,      
      href: "/onlineTherapyPage",
      href: "/onlineTherapyPage"
    },
  ]);

  const cards = summaries.map((item) => {
    return (
        <Container className="homeSummariesContainer">
          <Row>
            <Col xs={12} lg={6}>
                <div className="homeSummariesImage">
                    <img src={item.img} />
                </div>
            </Col>
            <Col xs={12} lg={6}>
                <div className="homeSummariesText">
                    <h1 className="homeSummariesTitle">{item.title}</h1>
                    <p className="homeSummariesParagraph">{item.text}</p>
                    <Link to={item.href}><button className="btn-okb-primary">Get Started</button></Link>
                    <Link to={item.href}><button className="btn-okb-secondary">Returning Patients</button></Link>
                </div>
            </Col>
          </Row>
        </Container>      
    );
  });

  return <div>{cards}</div>;
}

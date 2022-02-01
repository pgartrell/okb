import React, { useState } from "react";
// import data from "../data/data.js";
import { Card } from "react-bootstrap";
import testDoctorImage from "../images/testDoctorImage.jpg"
import { HomeSummariesButton, HomeSummariesCard, HomeSummariesCardBody, HomeSummariesCardImage, HomeSummariesText, HomeSummariesTitle } from "../styles/HomeSummaries.styles";

export default function HomeSummaries() {
  const [summaries, setSummaries] = useState([
    {
      title: "Mobile Clinic",
      text: "This will explain the mobile clinic",
      img: testDoctorImage,
    },

    {
      title: "Online Therapy",
      text: "This will explain the online Therapy",
      img: testDoctorImage,
    },
  ]);

  const cards = summaries.map((item) => {
    return (
      <ul>
        <HomeSummariesCard>          
            <HomeSummariesCardImage src={item.img} />
          <HomeSummariesCardBody>
            <HomeSummariesTitle>{item.title}</HomeSummariesTitle>
            <HomeSummariesText>{item.text}</HomeSummariesText>
            <HomeSummariesButton>Get Started</HomeSummariesButton>
          </HomeSummariesCardBody>
        </HomeSummariesCard>
      </ul>
    );
  });

  return <div>{cards}</div>;
}

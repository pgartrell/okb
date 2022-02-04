import React, { useState } from "react";
import testDoctorImage from "../images/testDoctorImage.jpg";
import "../styles/HomeSummaries.css"

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
      
        <div className="homeSummariesContainer">
          <div className="homeSummariesImage">
            <img src={item.img} />
          </div>
          <div className="homeSummariesText">
            <h1 className="homeSummariesTitle">{item.title}</h1>
            <p className="homeSummariesParagraph">{item.text}</p>
            <button className="homeSummariesButton">Get Started</button>
          </div>
        </div>      
    );
  });

  return <div>{cards}</div>;
}

import React, { useState } from "react";
import testDoctorImage from "../images/testDoctorImage.jpg";
import "../styles/HomeSummaries.css"
import {Link} from "react-router-dom"



export default function HomeSummaries() {
  const [summaries, setSummaries] = useState([
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
      
        <div className="homeSummariesContainer">
          <div className="homeSummariesImage">
            <img src={item.img} />
          </div>
          <div className="homeSummariesText">
            <h1 className="homeSummariesTitle">{item.title}</h1>
            <p className="homeSummariesParagraph">{item.text}</p>
            <Link to={item.href}><button className="btn-okb-primary">Get Started</button></Link>
            <Link to={item.href}><button className="btn-okb-secondary">Returning Patients</button></Link>
          </div>
        </div>      
    );
  });

  return <div>{cards}</div>;
}

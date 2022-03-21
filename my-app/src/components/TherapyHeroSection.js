import React from "react";
import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron} from "../styles/HomeHeroSection.styles.js"
import {Link} from "react-router-dom"
import { TherapyJumbotronContainer } from "../styles/TherapyHeroSection.styles";

const TherapyHeroSection = () => {
  return (
    <TherapyJumbotronContainer>
      <Jumbotron>
        <HomeHeroTitle className="display-4">Online Therapy</HomeHeroTitle>
        <HomeHeroSubtitle className="lead">
          This will hold text about Online Therapy 
        </HomeHeroSubtitle>
        <div style={{ paddingLeft: "50px" }}>
          <Link to="/appointmentPage">
            <button className="btn-okb-primary">Get Started</button>
          </Link>
          <Link to='/therapistsPage' style={{textDecoration: 'none'}}>
            <button className="btn-okb-secondary">Meet All Therapists</button>
          </Link>
        </div>
      </Jumbotron>
    </TherapyJumbotronContainer>
  );
};

export default TherapyHeroSection;

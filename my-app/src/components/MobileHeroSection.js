import React from "react"
import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron} from "../styles/HomeHeroSection.styles.js"
import { MobileJumbotronContainer } from "../styles/MobileHeroSection.styles.js";

const MobileHeroSection = () => {
  return (
    <MobileJumbotronContainer>
      <Jumbotron>
        <HomeHeroTitle className="display-4">Mobile Clinic</HomeHeroTitle>
        <HomeHeroSubtitle className="lead">This will hold text about Mobile Clinic</HomeHeroSubtitle>      
      </Jumbotron>
    </MobileJumbotronContainer>
  );
};

export default MobileHeroSection;
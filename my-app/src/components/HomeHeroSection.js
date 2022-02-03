import React from "react"
import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron, JumbotronContainer } from "../styles/HomeHeroSection.styles.js"

const HomeHeroSection = () => {
  return (
    <JumbotronContainer>
      <Jumbotron>
        <HomeHeroTitle className="display-4">Ghana Services</HomeHeroTitle>
        <HomeHeroSubtitle className="lead">This will hold text about Ghana Services</HomeHeroSubtitle>      
      </Jumbotron>
    </JumbotronContainer>
  );
};

export default HomeHeroSection;


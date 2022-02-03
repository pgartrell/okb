import React from "react"
import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron } from "../styles/HomeHeroSection.styles.js"


const HomeHeroSection = () => {
  return (
    <Jumbotron>
      <HomeHeroTitle className="display-4">Ghana Services</HomeHeroTitle>
      <HomeHeroSubtitle className="lead">This will hold text about Ghana Services</HomeHeroSubtitle>      
    </Jumbotron>
  );
};

export default HomeHeroSection;

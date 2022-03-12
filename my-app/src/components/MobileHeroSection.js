import React from "react"
import { HomeHeroSubtitle, HomeHeroTitle, Jumbotron} from "../styles/HomeHeroSection.styles.js"
import { MobileHeroButton, MobileJumbotronContainer } from "../styles/MobileHeroSection.styles.js";
import {Link} from "react-router-dom"

const MobileHeroSection = () => {
  return (
    
    <MobileJumbotronContainer>
      <Jumbotron>
        <HomeHeroTitle className="display-4">Mobile Clinic</HomeHeroTitle>
        <HomeHeroSubtitle className="lead">This will hold text about Mobile Clinic</HomeHeroSubtitle>
        <div style={{paddingLeft:"50px"}}>
        <Link to='/appointmentPage'><button className="btn-okb-primary">Get Started</button></Link>
        <Link to='/doctorsPage'><button className="btn-okb-secondary">Meet All Doctors</button></Link>   
        </div>     
      </Jumbotron>
           
    </MobileJumbotronContainer>
    
    
  );
};

export default MobileHeroSection;
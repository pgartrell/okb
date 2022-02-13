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
        <Link to='/appointmentPage'><MobileHeroButton className="homeSummariesButton">Get Started</MobileHeroButton></Link>
        <Link to=''><MobileHeroButton backgroundColor={"white"} textColor={"black"} hoverColor={"#FF0000"} className="homeSummariesButton">Meet All Doctors</MobileHeroButton></Link>   
        </div>     
      </Jumbotron>
           
    </MobileJumbotronContainer>
    
    
  );
};

export default MobileHeroSection;
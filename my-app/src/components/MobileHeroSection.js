import React from "react"
import { MobileJumbotronContainer, MobileHeroSubtitle, MobileHeroTitle, Jumbotron } from "../styles/MobileHeroSection.styles.js";
import {Link} from "react-router-dom"

const MobileHeroSection = () => {
  return (
    
    <MobileJumbotronContainer>
        <Jumbotron>
            <MobileHeroTitle className="display-4">Mobile Clinic</MobileHeroTitle>
            <MobileHeroSubtitle className="lead">This will hold text about Mobile Clinic</MobileHeroSubtitle>
            <div style={{paddingLeft:"50px"}}>
                <Link to='/appointmentPage'><button className="btn-okb-primary">Get Started</button></Link>
                <Link to='/doctorsPage'><button className="btn-okb-secondary">Meet All Doctors</button></Link>   
            </div>     
        </Jumbotron>  
    </MobileJumbotronContainer>
  );
};

export default MobileHeroSection;
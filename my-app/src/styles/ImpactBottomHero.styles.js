import styled from "styled-components"
import testImage from "../images/testImpactBottomHeroImage.jpg"

export const JumbotronContainer = styled.div`
  /* display: flex;
  justify-content: left;
  align-items:left;
  text-align: left;
  height: 30vh;
  width: 100vw;
  
  background-position: center center;  or 50% 50% 
  background-repeat: no-repeat;    */
  background-image: url(${testImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 50px; 
  padding: 100px;
  color: whitesmoke; 
  text-align: center ;
  
`

// export const Jumbotron = styled.div`
//   margin: 50px 50px;  
//   color: whitesmoke;
 
  
// `;

export const ImpactBottomHeroTitle = styled.h1`
  font-size: 60px;
  text-shadow: .5px .5px black;
  font-weight: normal;
  text-align: center;
  padding-left: 50px;
  color: white;
  padding-right: 50px ;

`;

export const ImpactBottomHeroSubtitle = styled.p `
    font-size:30px;
    text-shadow: .5px .5px black;
    font-weight: 600;
    color: white;
    float: left;
    
`

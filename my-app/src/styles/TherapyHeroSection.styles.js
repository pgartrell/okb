import styled from "styled-components";
import testImage3 from "../images/testOnlineTherapyImage.jpg"

export const TherapyJumbotronContainer = styled.section`
  display: flex;
  justify-content: left;
  align-items:left;
  text-align: left;
  height: 70vh;
  width: 100vw;
  background-size: cover;
  background-position: center center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage3});  
  
`
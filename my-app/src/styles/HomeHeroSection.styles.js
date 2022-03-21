import styled from "styled-components";
import testImage from "../images/testHospitalImage.jpg"


export const JumbotronContainer = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 60vh;
  width: 100vw;
  background-size: cover;
  background-position: center center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage});
  
`
export const Jumbotron = styled.div`
  /* padding-top: 100px;
  padding-bottom: 100px;
  margin: 50px 50px; */
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: whitesmoke;
  justify-content: flex-start;
  
`;

export const HomeHeroTitle = styled.h1`
  font-size: 5.5rem;
  text-shadow: .5px .5px black;
  font-weight: normal;
  text-align: left;
  padding-left: 50px;
  display: flex;

`;

export const HomeHeroSubtitle = styled.p `
    font-size: 2rem;
    text-shadow: .5px .5px black;
    font-weight: 600;
    text-align: left;
    padding-left: 50px;
`


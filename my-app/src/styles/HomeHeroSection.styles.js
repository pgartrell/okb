import styled from "styled-components";
import testImage from "../images/testHospitalImage.jpg"
import {devices} from './deviceMeasures.styles.js'


export const Jumbotron = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 50px 50px;
  background-size: cover;
  background-position: center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage});
  color: #FFE4C4;
  
  @media ${devices.tablet} {
    max-width: 100%;
  }
`;

export const HomeHeroTitle = styled.h1`
  font-size: 60px;
  text-shadow: .5px .5px black;
  font-weight: normal;
  text-align: left;
  padding-left: 30px;

`;

export const HomeHeroSubtitle = styled.p `
    font-size: 30px;
    text-shadow: .5px .5px black;
    font-weight: 600;
    text-align: left;
    padding-left: 30px;
`

import styled from "styled-components";
import testImage from "../images/testHospitalImage.jpg"

export const Jumbotron = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 50px 50px;
  background-size: cover;
  background-position: center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage});
  color: #FFE4C4;
  text-shadow: .5px .5px black;
  font-size: 25px;
`;

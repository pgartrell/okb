import styled from "styled-components";
import faceImage from "../images/faceCollection.jpg"

export const JoinLinkSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 50px 50px;
  background-size: cover;
  background-position: center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${faceImage});
  background-size: cover;
  color: #FFE4C4;
  text-shadow: .5px .5px black;
  font-size: 25px;
`;

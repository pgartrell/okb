import styled from "styled-components";
import kidsImage from "../images/ghana-kids.jpeg";


export const JumbotronContainer = styled.section`
  height: 40vh;
  width: 100vw;
  background-size: cover;
  background-position: center center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${kidsImage});
  display: flex;
  align-items: center;
`
export const HomeHeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  text-align: left;
  color: whitesmoke;
  padding-left: .5em;
`;

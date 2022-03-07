import styled from "styled-components";
import impactBanner from "../images/impactBanner.png";


export const ImpactJumbotronContainer = styled.section`
  height: 40vh;
  width: 100vw;
  background-size: cover;
  background-position: 25% 30%;
  background-repeat: no-repeat;  
  background-image: url(${impactBanner});
  display: flex;
  justify-content: left;
  align-items:center;
  text-align: left;
`

export const ImpactTitleContainer = styled.div`
  text-align: left;
`

export const ImpactHeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  text-align: left;
  display: flex;
  color: whitesmoke;
  padding-left: .5em;
`;


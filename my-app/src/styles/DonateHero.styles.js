import styled from "styled-components";
import donateBanner from "../images/donateBanner.png";


export const DonateJumbotronContainer = styled.section`
  height: 80vh;
  width: 100vw;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;  
  background-image: url(${donateBanner});
  display: flex;
  justify-content: left;
  align-items:center;
  text-align: left;
`

export const DonateTitleContainer = styled.div`
  text-align: left;
`

export const DonateHeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: normal;
  text-align: left;
  display: flex;
  color: whitesmoke;
  padding-left: .5em;
`;

export const DonateHeroSubitle = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: left;
  color: whitesmoke;
  padding-left: 2.5rem;
  margin-top: 0px;
  margin-bottom: 0px;
`;

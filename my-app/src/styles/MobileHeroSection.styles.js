import styled from "styled-components";
import testImage2 from "../images/testMobileClinicImage.jpg"

export const MobileJumbotronContainer = styled.section`
  display: flex;
  justify-content: left;
  align-items:left;
  text-align: left;
  height: 70vh;
  width: 100vw;
  background-size: cover;
  background-position: 65%; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage2});  
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

export const MobileHeroTitle = styled.h1`
  font-size: 5.5rem;
  text-shadow: .5px .5px black;
  font-weight: normal;
  text-align: left;
  padding-left: 50px;
  display: flex;

`;

export const MobileHeroSubtitle = styled.p `
    font-size: 2rem;
    text-shadow: .5px .5px black;
    font-weight: 600;
    text-align: left;
    padding-left: 50px;
`

//No longer in use. Use for reference
// export const MobileHeroButton = styled.button `
  
//     background-color: ${(props) => props.backgroundColor}; /* #FF0000 */
//     border: none;
//     color: ${(props) => props.textColor};
//     padding-left: 50px;
//     text-align: center;
//     text-decoration: none;
//     font-size: 16px;
//     font-weight: bold;
//     margin: 4px 2px;
//     cursor: pointer;
//     border-radius: 20px;
//     margin-left: 15px;

//     &:hover {
//       cursor: pointer;
//       background-color: #0d6efd;
//       color: black;
//     }

// `
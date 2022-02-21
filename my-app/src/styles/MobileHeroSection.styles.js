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
  background-position: center center; /* or 50% 50% */
  background-repeat: no-repeat;  
  background-image: url(${testImage2});  
  
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
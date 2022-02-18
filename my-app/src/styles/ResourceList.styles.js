import styled from "styled-components";
import testResourceImage from "../images/mountains.jpg";

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

  export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

export const ResourceListContainer = styled.div`
  display: flex;   
  justify-content: center;
  box-shadow: 0 2px 4px 4px #eee;
  margin-bottom: 30px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 30px;
`;

export const ResourceListImg = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 80%;
  
  background-image: url(${testResourceImage});
  background-size: contain;
  height: auto;
  width: 100%;
  background-repeat: no-repeat;
`;

// export const ResourceListImgContainer = styled.div`
//   max-width: 30%;  
//   padding-bottom: 20px;
//   height: 100%;
//   width: 100%;
// `;

export const ResourceListContentContainer = styled.div`
  padding-right: 100px;
`;

export const ResourceListp = styled.p`
  text-align: left;
  font-size: 20px;
  padding-left: 100px;
`;

export const ResourceListh1 = styled.h1`
  text-align: left;
  font-size: 30px;
  padding-left: 100px;

`;

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
  /* display: flex; */  
   
  box-shadow: 0 2px 4px 4px #eee;
  margin: 30px;
  margin-right: 20px;
     &:hover {
       cursor: pointer;
       background-color: #DCDCDC;
       color: black;
     } 
`;

export const ResourceListRow = styled.div `
  margin: "2%";
  height:"200px";
`

export const ResourceImage = styled.img `
  width: 200px;
  height: auto;
  padding-bottom: 5% ;
`

export const ResourceListImgContainer = styled.div`
  max-width: 30%;  
  padding-bottom: 20px;
  height: 100%;
  width: 100%;
  text-align: justify;
  `;

export const ResourceListContentContainer = styled.div`
  padding-right: 100px;
  float: right;
`;

export const ResourceListp = styled.p`
  text-align: left;
  font-size: 20px;
  color: black;
  @media (max-width: 860px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    white-space: nowrap;
  }
  
`;

export const ResourceListh1 = styled.h1`
  text-align: left;
  font-size: 30px;
  padding-top: 20px ;
  color: black ;
  @media (max-width: 860px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    white-space: nowrap;
  }

`;

export const ResourceSearchInput = styled.input `
  padding: 10px;
`
export const ResourceSearchButton = styled.button `
  margin-left: 30px;
  margin-right: 30px;
`

export const ResourceTags= styled.div `
 
  margin-bottom: 10px;
  margin-left: 15px;
  font-size:15px ;
  color: #ff0000;
  outline-style: solid;
  outline-color: #ff0000;
  border-radius: 25px;
  width: 40%;
  align-content: center ;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 860px) {
    font-size: 10px;
    padding:10px ;
   
  }

`

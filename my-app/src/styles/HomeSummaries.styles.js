import styled from "styled-components"
import testDoctorImage from "../images/testDoctorImage.jpg"

export const HomeSummariesCard = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;  
  border-radius: 5px;
  padding-left: 100px;
  padding-bottom: 50px;
  border-bottom: 1px solid gray;
  
`
export const HomeSummariesCardImage = styled.img `
  width: 30%;
  height: auto;  
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
`

export const HomeSummariesCardBody = styled.div `
  width: 50%;
  padding: 20px 40px;  
`
export const HomeSummariesTitle = styled.h1 `
    text-align: left;
`
export const HomeSummariesText = styled.p`
    text-align: left;
`
export const HomeSummariesButton = styled.button `
  background-color: #8B0000; //Dark Red
  border: none;
  color: white;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  margin-left: -100px;
  
`

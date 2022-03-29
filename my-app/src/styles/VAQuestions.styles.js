import styled from "styled-components";

export const VAQuestionsh1 = styled.h1`
  padding-top: 10%;
  padding-bottom: 5%;
`;

export const VAQuestionsButton = styled.button`
  padding: 20px;
  margin: 20px;
  color: #ff0000;
  text-decoration: underline;
  border: none;
  border-radius: 5px;
  width: 250px ;
  height: 100px;
  font-weight: bold ;
  font-size: 24px;
  white-space: nowrap ;
`;

/*VAFAQ Accordian */
export const VAFAQh2 = styled.h2 `
  padding-left: 200px ;
  @media (max-width: 1000px) {
    padding-left: 50px;
  }
`

/*VA Need Help Section */
export const VANeedHelpdiv = styled.div`
  padding: 100px ;
  height: 400px; 
  background-color: white;
  background-image: linear-gradient(180deg, white, #efeff5, #d0d0e2);
  @media (max-width: 400px) {
    padding-left: 60px;
  }

`

export const VANeedHelph2 = styled.h1`
  display: block;
  font-size: 2em;
  font-weight:bolder ;
  white-space: nowrap ;
`

export const VANeedHelph4 = styled.h4`
  font-size: 20px ;
`
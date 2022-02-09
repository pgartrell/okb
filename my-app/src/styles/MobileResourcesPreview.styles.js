import styled from "styled-components";

export const FeatureImageContainer = styled.div`
  background-size: cover;
  width: 500px;
  height: 500px;
  justify-content: left;
  align-items: left;
`;
export const FeatureImage = styled.img`
  
  &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
`;
export const FeatureContent = styled.div`
  padding-top: 5px;
  &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
`;
export const FeatureContenth3 = styled.h3`
  text-align: left;
  color: black;
`;
export const FeatureContentp = styled.p`
  text-align: left;
  color: black;
`;
export const Resourcediv = styled.div`
  text-align: left;
  color: black;
  padding-left: 20px;
  margin-top: 10px;
  &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

  
`;
export const Resourceh3 = styled.h3`
  text-align: left;
  color: black;
  margin: 20px;
`;
export const Resourcep = styled.p`
  text-align: left;
  color: black;
  margin: 20px;
`;

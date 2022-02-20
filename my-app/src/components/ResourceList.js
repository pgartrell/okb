import React from "react";
// import testResourceImage from "../images/mountains.jpg";
import {
  ResourceListContainer,
  ResourceListImg,
  ResourceListImgContainer,
  ResourceListContentContainer,
  ResourceListp,
  ResourceListh1,
} from "../styles/ResourceList.styles";
import testResourceImage from "../images/mountains.jpg"

const ResourceList = () => {
  return (
    <ResourceListContainer>
      {/* <Link
        to={"/resources/" + resource.id}
        key={resource.id}
        style={{ textDecoration: "none" }}
      > */}
      <div className="row">
        <div className= "col-6">
        {/* <ResourceListImgContainer> */}
          <ResourceListImg/>
          {/* <ResourceListImg /> */}
        {/* </ResourceListImgContainer> */}
        </div>
        
        <ResourceListContentContainer className="col-md-6">
          <ResourceListh1>Resource 1</ResourceListh1>
          <ResourceListp>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ResourceListp>
        </ResourceListContentContainer>
      {/* </Link> */}
      
      </div>
    </ResourceListContainer>
  );
};

export default ResourceList;

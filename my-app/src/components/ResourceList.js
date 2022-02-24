import React, { useEffect, useState } from "react";
// import testResourceImage from "../images/mountains.jpg";
import {
  ResourceListContainer,
  ResourceListImg,
  ResourceListImgContainer,
  ResourceListContentContainer,
  ResourceListp,
  ResourceListh1,
} from "../styles/ResourceList.styles";
import testResourceImage from "../images/mountains.jpg";
import { Link } from "react-router-dom";

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/resources?populate=*")
      .then((data) => data.json())
      .then((data) => {
        setResources(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  let imageurl = `http://localhost:1337/${setResources.data}/`
  console.log(imageurl)
  return (
    <div>
      {resources.map((resource) => (
        <div className="row">
          <Link
            to={"/resources/" + resource.id}
            key={resource.id}
            style={{ textDecoration: "none" }}
          >
            <div key={resource.id} className="col-6">
              {/* <ResourceListImgContainer> */}
              <img src="http://localhost:1337/uploads/thumbnail_mountains_456f150d8e.jpg" />
              {/* <img src = {imageurl}/> */}
              {/* <ResourceListImg /> */}
              {/* </ResourceListImgContainer> */}
            </div>

            <ResourceListContentContainer className="col-md-6">
              <ResourceListh1>{resource.attributes.title}</ResourceListh1>
              <ResourceListp>{resource.attributes.description}</ResourceListp>
            </ResourceListContentContainer>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;

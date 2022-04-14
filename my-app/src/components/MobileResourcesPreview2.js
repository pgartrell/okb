import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, CardGroup } from "react-bootstrap";
import testMobileResourceImage from "../images/testMobileResourceImage.jpg";
import "../styles/MobileResourcesPreview.css";

const api_url = "http://localhost:1337";

const MobileResourcesPreview = () => {
  const [resources, setResources] = useState([]);
  console.log(resources);

  let resourceDataRoute = useParams();

  useEffect(() => {
    fetch("http://localhost:1337/api/resources?populate=*")
      .then((data) => data.json())
      .then((data) => {
        setResources(data.data);
      })
      .catch((error) => console.log(error));
  }, {});

  const featureResourceData = {
    id: 1,
    title: "Feature Resource",
    content:
      "Est tempor irure commodo amet. Irure cillum minim aliquip quis ut consequat fugiat. Est commodo ",
  };

  return (
    <div className=" resource-container">
      <div className="row">
      <h1 className="resourceh1" >
            Resources
          </h1>
        <div className="col-md-6 p-3">

          <Link
            to={"/resources/" + featureResourceData.id}
            style={{ textDecoration: "none" }}
          >
            <div className="feature-card">
              <img className="feature-card-image" src={testMobileResourceImage} />
              <div className="feature-card-body" >
                <h5 className="feature-title">Card title</h5>
                <p className="feature-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 ">
          <Card className="resourceListContainer border-0">
          {resources
          .map((resource) => (
              <Link
                to={"/resources/" + resource.id}
                key={resource.id}
                style={{ textDecoration: "none" }}
              >
                <Card.Body className="resourceBody">
                  <Card.Title className="resourceTitle">
                  {resource.attributes.title}
                  </Card.Title>
                  <Card.Text className="resourceText">
                  {resource.attributes.title}
                  </Card.Text>
                </Card.Body>{" "}
              </Link>
            ))}
            <Link to = "/resourcesPage" style={{textDecoration: 'none'}}><button className="btn-okb-secondary" style={{float:"right"}}>View More</button></Link>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default MobileResourcesPreview;

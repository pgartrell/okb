import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, CardGroup } from "react-bootstrap";
import testMobileResourceImage from "../images/testMobileResourceImage.jpg";

import "../styles/MobileResourcesPreview.css";

const MobileResourcesPreview = () => {
  const mobileResourcesData = [
    {
      id: 2,
      title: "Resource 1",
      content:
        "Est tempor irure commodo amet. Irure cillum minim aliquip quis ut consequat fugiat. Est commodo eu elit consequat elit in ullamco minim reprehenderit duis nostrud cupidatat. Nulla tempor consectetur cupidatat labore ipsum exercitation proident fugiat tempor cillum quis est sint exercitation.",
    },
    {
      id: 3,
      title: "Resource 2",
      content:
        "Est tempor irure commodo amet. Irure cillum minim aliquip quis ut consequat fugiat. Est commodo eu elit consequat elit in ullamco minim reprehenderit duis nostrud cupidatat. Nulla tempor consectetur cupidatat labore ipsum exercitation proident fugiat tempor cillum quis est sint exercitation.",
    },
    {
      id: 4,
      title: "Resource 3",
      content:
        "Est tempor irure commodo amet. Irure cillum minim aliquip quis ut consequat fugiat. Est commodo eu elit consequat elit in ullamco minim reprehenderit duis nostrud cupidatat. Nulla tempor consectetur cupidatat labore ipsum exercitation proident fugiat tempor cillum quis est sint exercitation.",
    },
  ];

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
            {mobileResourcesData.map((resource) => (
              <Link
                to={"/resources/" + resource.id}
                key={resource.id}
                style={{ textDecoration: "none" }}
              >
                <Card.Body className="resourceBody">
                  <Card.Title className="resourceTitle">
                    {resource.title}
                  </Card.Title>
                  <Card.Text className="resourceText">
                    {resource.content}
                  </Card.Text>
                </Card.Body>{" "}
              </Link>
            ))}
            <Link to = "/resourcesPage" style={{textDecoration: 'none'}}><button className="resource-button">View More</button></Link>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default MobileResourcesPreview;

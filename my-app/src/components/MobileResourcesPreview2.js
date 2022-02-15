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

  const featureResourceData = [
    {
      id: 1,
      title: "Feature Resource",
      content: "Est tempor irure commodo amet. Irure cillum minim aliquip quis ut consequat fugiat. Est commodo "
    }
  ]

const featureResourceID = featureResourceData.find(x => x.id === '1').id

  return (
    <Row className="resourceRow" sm={12} md={12}>
      <h1 className="resourceh1" style={{ paddingLeft: "100px" }}>
        Resources
      </h1>
      <Col className="featureCol" sm={12} md={12} lg={6} xl={6}>
        <Link to={"/resources/" + {featureResourceID}} style={{ textDecoration: "none" }}>
          {" "}
          {/*  + featureId */}
          <Card className="featureImageContainer">
            <Card.Img
              className="featureImage"
              variant="top"
              src={testMobileResourceImage}
            />
            <Card.Body className="featureBody">
              <Card.Title className="featureTitle">Card Title</Card.Title>
              <Card.Text className="featureText">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col className="resourceCol">
        <Card className="resourceContainer">
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
        </Card>
      </Col>
    </Row>
  );
};

export default MobileResourcesPreview;

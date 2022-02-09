import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import testMobileResourceImage from "../images/testMobileResourceImage.jpg";
import {
  FeatureContent,
  FeatureImage,
  FeatureImageContainer,
  FeatureContentp,
  FeatureContenth3,
  Resourcediv,
  Resourceh3,
  Resourcep,
} from "../styles/MobileResourcesPreview.styles.js";

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

  // let featureId;
  // for (let i= 0; i<mobileResourcesData.length; i++) {
  //   if(mobileResourcesData.id === 2){
  //     featureId === 2
  //   }
  //   null
  // }

  return (
    <Container>
      <Row>
        <Col>
          <Link to={"/resources/"} style={{ textDecoration: "none" }}>
            {" "}
            {/*  + featureId */}
            <FeatureImageContainer>
              <FeatureImage
                style={{ paddingBottom: "0px", marginBottom: "0px" }}
                src={testMobileResourceImage}
              />
            </FeatureImageContainer>
            <FeatureContent
              style={{
                padding: "0.5rem 1rem",
                boxShadow: "0 2px 4px 4px #EEE",
              }}
            >
              <FeatureContenth3>Test Header</FeatureContenth3>
              <FeatureContentp>
                Test Content Est tempor irure commodo amet. Irure cillum minim
                aliquip quis ut consequat fugiat. Est commodo eu elit consequat
                elit in ullamco minim reprehenderit duis nostrud cupidatat.
                Nulla tempor consectetur cupidatat labore ipsum exercitation
                proident fugiat tempor cillum quis est sint exercitation.
              </FeatureContentp>
            </FeatureContent>
          </Link>
        </Col>

        <Col>
          {mobileResourcesData.map((resource) => (
            <Link
              to={"/resources/" + resource.id}
              key={resource.id}
              style={{ textDecoration: "none" }}
            >
              <Resourcediv
                style={{
                  boxShadow: "0 2px 4px 4px #EEE",
                }}
              >
                <Resourceh3>{resource.title}</Resourceh3>
                <Resourcep>{resource.content}</Resourcep>
              </Resourcediv>{" "}
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MobileResourcesPreview;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  Resourceh1,
  Resourceh3,
  ResourceImage,
  Resourcep,
} from "../styles/ResourceInfoCard.styles";
import "../styles/ResourceFloatingBar.css";
import ResourceFloatingBar from "../components/ResourceFloatingBar.js";

const api_url = "http://localhost:1337";

const ResourceBioList = () => {
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

  // let imageurl = `http://localhost:1337`

  return (
    <div>
      <Container>
        {resources
          .filter((resource) => resource.id == resourceDataRoute.id)
          .map((resource) => (
            <Row>
              <Col md={12}> 
                <ResourceImage
                  className="resource=pic"
                  src={
                    api_url +
                    resource.attributes.image.data.attributes.formats.thumbnail
                      .url
                  }
                />
                </Col>  
              
              <Col md={8} key={resource.id}>
                <Container>
                  {/* "id" needs to be given to the htags to connect the floating bar */}
                  <Resourceh1>{resource.attributes.title}</Resourceh1>
                  <Resourceh3 id="header1">
                    {resource.attributes.header1}
                  </Resourceh3>
                  <Resourcep>{resource.attributes.fullDescription1}</Resourcep>
                  <Resourceh3 id="header2">
                    {resource.attributes.header2}
                  </Resourceh3>
                  <Resourcep>{resource.attributes.fullDescription2}</Resourcep>
                  <Resourceh3 id="header3">
                    {resource.attributes.header3}
                  </Resourceh3>
                  <Resourcep>{resource.attributes.fullDescription3}</Resourcep>
                </Container>
              </Col>
              <Col md={4} style={{position:"relative"}}>
              <ResourceFloatingBar />
              </Col>
            </Row>
          ))}
      </Container>
      {/* <Container>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default ResourceBioList;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ResourceFloatingBar.css"


const api_url = "http://localhost:1337";

const ResourceFloatingBar = () => {
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
    <Container className="floating-container">
        {resources
        .filter((resource) => resource.id == resourceDataRoute.id)
        .map((resource) => (
        <nav className="resourceNav">
            <ul className="resourceUl" >
                <li className="resourceli"><a className="resourcea" href="#header1"><span>{resource.attributes.header1}</span></a></li>
                <li className="resourceli"><a className="resourcea" href="#header2"><span>{resource.attributes.header2}</span></a></li>
                <li className="resourceli"><a className="resourcea" href="#header3"><span>{resource.attributes.header3}</span></a></li>
            </ul> 
        </nav>
        ))}
    </Container>
  );
};

export default ResourceFloatingBar;
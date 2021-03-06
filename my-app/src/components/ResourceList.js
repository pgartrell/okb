import React, { useEffect, useState } from "react";
// import testResourceImage from "../images/mountains.jpg";
import {
  ResourceListContainer,
  ResourceListImg,
  ResourceListImgContainer,
  ResourceListContentContainer,
  ResourceListp,
  ResourceListh1,
  ResourceSearchInput,
  ResourceSearchButton,
  ResourceListRow,
  ResourceImage,
  ResourceTags,
} from "../styles/ResourceList.styles";
import testResourceImage from "../images/mountains.jpg";
import { Link } from "react-router-dom";
import qs from "qs";

const api_url = "http://localhost:1337";

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const filters = {};
    const populate = "*";
    if (selectedTag) {
      filters.resource_tags = { name: { $eq: `${selectedTag}` } };
    }

    const query = qs.stringify(
      { filters, populate },
      { encodeValuesOnly: true }
    );

    fetch(`http://localhost:1337/api/resources?${query}`)
      .then((data) => data.json())
      .then((data) => {
        setResources(data.data);
      })
      .catch((error) => console.log(error));
  }, [selectedTag]);

  // function onClickButton(clickedResourceTag){
  //   setFilteredTags(resource_tags.filter(resource_tag => resource_tag.name === clickedResourceTag)
  // }

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:1337/api/resources?populate=*&title_contains=${searchTerm
  //       .trim()
  //       .replace(" ", "+")}`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       setResources(data.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [searchTerm]); //When searchTerm changes, the useEffect function is going to run

  return (
    <div>
      {/* Search Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ paddingLeft: "70px" }}>
            <li className={"nav-item " + (selectedTag==""?"active":"")}>
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  setSelectedTag("");
                }}
              >
                All <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={"nav-item " + (selectedTag=="Physical"?"active":"")}>
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  setSelectedTag("Physical");
                }}
              >
                Physical <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={"nav-item " + (selectedTag=="Mental"?"active":"")}>
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  setSelectedTag("Mental");
                }}
              >
                Mental
              </a>
            </li>
            <li className={"nav-item " + (selectedTag=="Relationship"?"active":"")}>
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  setSelectedTag("Relationship");
                }}
              >
                Relationship
              </a>
            </li>
            <li className={"nav-item " + (selectedTag=="Self-Help"?"active":"")}>
              <a
                href="#"
                className="nav-link"
                onClick={() => {
                  setSelectedTag("Self-help");
                }}
              >
                Self Help
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <ResourceSearchInput
            className="resourceSearchInput form-control mr-sm-2"
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            value={searchTerm}
          />
        </form>
        <ResourceSearchButton
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </ResourceSearchButton>
      </nav>

      {/* {resources.filter((val) => {
      console.log(val)

        if (searchTerm == "") {
          return val
        } else if (val.attributes.fullDescription.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }

      )} */}
      {/* Search Bar */}

      {resources.map((resource) => {
        let imageurl =
          resource.attributes.image.data.attributes.formats.thumbnail.url;
        let resource_tags = resource.attributes.resource_tags.data;

        return (
          // <div className="row">

          <ResourceListContainer key={resource.id}>
            <Link
              to={"/resources/" + resource.id}
              key={resource.id}
              style={{ textDecoration: "none" }}
            >
              <ResourceListRow className="row">
                <ResourceListImgContainer className="resource-list-img-container">
                  <ResourceImage
                    className="resource-image"
                    src={`${api_url}${imageurl}`}
                  />

                  {resource_tags.map((tag) => (
                    <ResourceTags
                      className="resource-tags"                      
                    >
                      {tag.attributes.name}{" "}
                    </ResourceTags>
                  ))}
                </ResourceListImgContainer>

                <ResourceListContentContainer className="col-6">
                  <ResourceListh1>{resource.attributes.title}</ResourceListh1>
                  <ResourceListp>{resource.attributes.header1}</ResourceListp>
                </ResourceListContentContainer>
              </ResourceListRow>
            </Link>
          </ResourceListContainer>
          // </div>
        );
      })}
    </div>
  );
};

export default ResourceList;

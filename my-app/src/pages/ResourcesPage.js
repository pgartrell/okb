import React from "react";
import ResourceList from "../components/ResourceList";
import ResourceSearchBar from "../components/ResourceSearchBar";

const ResourcesPage = () => {
  return (
    <div>
      <ResourceSearchBar />
      <ResourceList />
    </div>
  );
};

export default ResourcesPage;

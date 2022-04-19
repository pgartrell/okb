import React, {useLayoutEffect}  from "react";

import ResourceList from "../components/ResourceList";


const ResourcesPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      
      <ResourceList />
      
    </div>
  );
};

export default ResourcesPage;

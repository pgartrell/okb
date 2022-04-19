import React, {useLayoutEffect}  from "react";
import WorkWithUsHero from "../components/WorkWithUsHero";
import VolunteerInGhana from "../components/VolunteerInGhana";
import VolunteerTestimonials from "../components/VolunteerTestimonials";

const WorkWithUsPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <WorkWithUsHero />
      <VolunteerInGhana />
      <VolunteerTestimonials />
    </div>
  );
};

export default WorkWithUsPage;
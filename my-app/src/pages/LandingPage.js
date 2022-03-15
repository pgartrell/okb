import React from "react";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeSummaries from "../components/HomeSummaries";
import HomeResources from "../components/HomeResources";
import HomeAccordion from "../components/HomeAccordion";
import HomeJoinLink from "../components/HomeJoinLink";


const LandingPage = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeSummaries />      
      <HomeAccordion />
      <HomeJoinLink />
      <HomeResources />
    </div>
  );
};

export default LandingPage;

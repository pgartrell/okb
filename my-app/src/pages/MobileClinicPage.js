import React from "react";
import MobileHeroSection from "../components/MobileHeroSection";

import HowItWorksMobile from "../components/HowItWorksMobile";

import MobileAccordion from '../components/MobileFAQAccordion';

import MobileSuccessStories from "../components/MobileSuccessStories";
import MobileResourcesPreview from "../components/MobileResourcesPreview";


const MobileClinicPage = () => {
  return (
    <div>

      <MobileHeroSection />
      <HowItWorksMobile />
      <MobileSuccessStories />
      <MobileResourcesPreview />
      <MobileAccordion />


    </div>
  );
};

export default MobileClinicPage;

import React from "react";
import MobileHeroSection from "../components/MobileHeroSection";

import HowItWorksMobile from "../components/HowItWorksMobile";

import MobileAccordion from '../components/MobileFAQAccordion';

import MobileSuccessStories from "../components/MobileSuccessStories";


const MobileClinicPage = () => {
  return (
    <div>

      <MobileHeroSection />

      <HowItWorksMobile />
      <MobileSuccessStories />
      <MobileAccordion />


    </div>
  );
};

export default MobileClinicPage;

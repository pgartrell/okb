import React from "react";
import MobileHeroSection from "../components/MobileHeroSection";

import HowItWorksMobile from "../components/HowItWorksMobile";

import MobileAccordion from '../components/MobileFAQAccordion';
import OurTherapistSection from "../components/MobileOurTherapists";


const MobileClinicPage = () => {
  return (
    <div>

      <MobileHeroSection />

      <HowItWorksMobile />

      <OurTherapistSection />

      <MobileAccordion />


    </div>
  );
};

export default MobileClinicPage;

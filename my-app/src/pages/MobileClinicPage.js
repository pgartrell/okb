import React, {useLayoutEffect}  from "react";
import MobileHeroSection from "../components/MobileHeroSection";
import HowItWorksMobile from "../components/HowItWorksMobile";
import MobileAccordion from '../components/MobileFAQAccordion';
import MobileSuccessStories from "../components/MobileSuccessStories";
import MobileResourcesPreview2 from "../components/MobileResourcesPreview2";
import OurDoctorCarouselSection from "../components/MobileOurDoctors";


const MobileClinicPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <MobileHeroSection />
      <HowItWorksMobile />
      <OurDoctorCarouselSection />
      <MobileSuccessStories />
      <MobileResourcesPreview2 />
      <MobileAccordion />
    </div>
  );
};

export default MobileClinicPage;

import React from "react";
import OurTherapistCarouselSection from "../components/MobileOurTherapists";
import TherapyHeroSection from "../components/TherapyHeroSection";
import TherapyHowItWorks from "../components/TherapyHowItWorks";
import TherapyResourcesPreview from "../components/TherapyResourcesPreview";
import TherapyFAQAccordion from "../components/TherapistFAQAccordion"

const OnlineTherapyPage = () => {
  return (
    <div>
      <TherapyHeroSection />
      <TherapyHowItWorks />
      <OurTherapistCarouselSection />
      <TherapyResourcesPreview />
      <TherapyFAQAccordion />
    </div>
  );
};

export default OnlineTherapyPage;

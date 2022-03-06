import React from "react";
import OurTherapistCarouselSection from "../components/MobileOurTherapists";
import TherapyHeroSection from "../components/TherapyHeroSection";
import TherapyHowItWorks from "../components/TherapyHowItWorks";
import TherapyResourcesPreview from "../components/TherapyResourcesPreview";

const OnlineTherapyPage = () => {
  return (
    <div>
      <TherapyHeroSection />
      <TherapyHowItWorks />
      <OurTherapistCarouselSection />
      <TherapyResourcesPreview />
    </div>
  );
};

export default OnlineTherapyPage;

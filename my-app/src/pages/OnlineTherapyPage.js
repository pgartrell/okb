import React, {useLayoutEffect}  from "react";
import OurTherapistCarouselSection from "../components/MobileOurTherapists";
import TherapyHeroSection from "../components/TherapyHeroSection";
import TherapyHowItWorks from "../components/TherapyHowItWorks";
import TherapyResourcesPreview from "../components/TherapyResourcesPreview";
import TherapyFAQAccordion from "../components/TherapistFAQAccordion"

const OnlineTherapyPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

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

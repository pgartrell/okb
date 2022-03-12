import React from "react";
import ImpactBottomHero from "../components/ImpactBottomHero";
import ImpactHero from "../components/ImpactHero";
import OurImpactCards from "../components/OurImpactCards";

const ImpactPage = () => {
  return (
    <div>
        <ImpactHero />
        <OurImpactCards />
        <ImpactBottomHero />
    </div>
  );
};

export default ImpactPage;
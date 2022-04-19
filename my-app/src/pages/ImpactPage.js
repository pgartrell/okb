import React, {useLayoutEffect}  from "react";
import ImpactBottomHero from "../components/ImpactBottomHero";
import ImpactHero from "../components/ImpactHero";
import OurImpactCards from "../components/OurImpactCards";

const ImpactPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <ImpactHero />
        <OurImpactCards />
        <ImpactBottomHero />
    </div>
  );
};

export default ImpactPage;
import React from "react";
import TherapistPhotos from "../components/TherapistPhotos";
import TherapistsPageIntro from "../components/TherapistsPageIntro";

const TherapistsPage = () => {
  return (
    <div>
      <TherapistsPageIntro />
      <TherapistPhotos />
    </div>
  );
};

export default TherapistsPage;
import React from "react";
import DoctorPhotos from "../components/DoctorPhotos";
import DoctorPageIntro from "../components/DoctorPageIntro";

const DoctorsPage = () => {
  return (
    <div>
      <DoctorPageIntro />
      <DoctorPhotos />
    </div>
  );
};

export default DoctorsPage;
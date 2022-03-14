import React from "react";
import { Container, Row } from 'react-bootstrap';
import { DoctorPhotosTop, DoctorPhotosBottom } from "../components/DoctorPhotos";
import DoctorPageIntro from "../components/DoctorPageIntro";
import MobileSuccessStories from "../components/MobileSuccessStories";
import DoctorPageBottomButtons from "../components/DoctorPageBottomButtons";
import TopBioPics from "../components/Biographies";
import LowerBioPics from "../components/LowerBiographies";

const DoctorsPage = () => {
  return (
    <Container>
      <Row>
        <DoctorPageIntro /> 
      </Row>
      <TopBioPics />
      <DoctorPhotosTop />

      <MobileSuccessStories />

      <LowerBioPics />
      <DoctorPhotosBottom />

      <MobileSuccessStories />

      <DoctorPageBottomButtons />

    </Container>
  );
};

export default DoctorsPage;
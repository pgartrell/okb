import React from "react";
import { Container, Row } from 'react-bootstrap';
import { DoctorPhotosTop, DoctorPhotosBottom } from "../components/DoctorPhotos";
import DoctorPageIntro from "../components/DoctorPageIntro";
import MobileSuccessStories from "../components/MobileSuccessStories";

const DoctorsPage = () => {
  return (
    <Container>
      <Row>
      <DoctorPageIntro />
      </Row>
      <DoctorPhotosTop />

      <MobileSuccessStories />

      <DoctorPhotosBottom />

      <MobileSuccessStories />

    </Container>
  );
};

export default DoctorsPage;
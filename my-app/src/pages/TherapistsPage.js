import React from "react";
import { Container, Row } from 'react-bootstrap';
import { TherapistPhotosTop, TherapistPhotosBottom } from "../components/TherapistPhotos";
import TherapistPageBottomButtons from "../components/TherapistPageBottomButtons";
import TherapistsPageIntro from "../components/TherapistsPageIntro";
import MobileSuccessStories from "../components/MobileSuccessStories";

const TherapistsPage = () => {
  return (
    <Container>
      <Row>
      <TherapistsPageIntro />
      </Row>
      <TherapistPhotosTop />

      <MobileSuccessStories />

      <TherapistPhotosBottom />

      <MobileSuccessStories />

      <TherapistPageBottomButtons />

    </Container>
  );
};

export default TherapistsPage;
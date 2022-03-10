import React from "react";
import { Container, Row } from 'react-bootstrap';
import { DoctorPhotosTop, DoctorPhotosBottom } from "../components/DoctorPhotos";
import DoctorPageIntro from "../components/DoctorPageIntro";
import MobileSuccessStories from "../components/MobileSuccessStories";
import DoctorPageBottomButtons from "../components/DoctorPageBottomButtons";
import { RenderDoctorPhotosOrBios } from "../components/DoctorPhotos";
import BioList from "../components/DoctorInfoCard";
import BioPics from "../components/Biographies";

const DoctorsPage = () => {
  return (
    <Container>
      <Row>
      <DoctorPageIntro />
      </Row>
      <BioPics />
      <DoctorPhotosTop />

      <MobileSuccessStories />

      <DoctorPhotosBottom />

      <MobileSuccessStories />

      <DoctorPageBottomButtons />

      <BioList />

{/* <RenderDoctorPhotosOrBios /> */}

    </Container>
  );
};

export default DoctorsPage;
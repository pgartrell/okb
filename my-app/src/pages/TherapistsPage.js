import React, {useLayoutEffect}  from "react";
import { Container, Row } from 'react-bootstrap';
import { TherapistPhotosTop, TherapistPhotosBottom } from "../components/TherapistPhotos";
import TherapistPageBottomButtons from "../components/TherapistPageBottomButtons";
import TherapistsPageIntro from "../components/TherapistsPageIntro";
import MobileSuccessStories from "../components/MobileSuccessStories";
import TherapistTopBioPics from "../components/TherapistBiographies";
import TherapistLowerBioPics from "../components/TherapistLowerBiographies";

const TherapistsPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <Container>
      <Row>
       <TherapistsPageIntro />
      </Row>

      {/* The component called TherapistTopBioPics requires Strapi, but the one called TherapistPhotosTop does not - only one is needed overall */}
      <TherapistTopBioPics />
      {/* <TherapistPhotosTop /> */}

      <MobileSuccessStories />

      {/* The component called TherapistLowerBioPics requires Strapi, but the one called TherapistPhotosBottom does not - only one is needed overall */}
      <TherapistLowerBioPics />
      {/* <TherapistPhotosBottom /> */}

      <MobileSuccessStories />
      <TherapistPageBottomButtons />
    </Container>
  );
};

export default TherapistsPage;
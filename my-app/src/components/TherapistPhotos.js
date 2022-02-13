import * as React from 'react';
import { THERAPISTS } from '../shared/therapists';
import { CaptionStyle, DoctorImage, DoctorImageContainer, SubCaptionStyle } from '../styles/OurDoctorStyles.styles';

const therapistPagePics = THERAPISTS.map(doctor => {
    return (
        <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
        <CaptionStyle>
            {doctor.name}
            <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
        </CaptionStyle></DoctorImageContainer>


    )})

export default function TherapistPhotos() {
    return (
        <div className="container">
        <div className="row">
            {therapistPagePics}
        {/* <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={DOCTORS[1].image}></DoctorImage><CaptionStyle>Dr. One</CaptionStyle></DoctorImageContainer>
        <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={DOCTORS[1].image}></DoctorImage><CaptionStyle>Dr. One</CaptionStyle></DoctorImageContainer> */}
        </div>

        </div>
    )
}
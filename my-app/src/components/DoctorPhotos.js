import * as React from 'react';
import { DOCTORS } from '../shared/doctors';
import { CaptionStyle, DoctorImage, DoctorImageContainer } from '../styles/OurDoctorStyles.styles';

const doctorPagePics = DOCTORS.map(doctor => {
    return (
        <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={doctor.image}></DoctorImage><CaptionStyle>{doctor.name}</CaptionStyle></DoctorImageContainer>


    )})

export default function DoctorPhotos() {
    return (
        <div className="container">
        <div className="row">
            {doctorPagePics}
        {/* <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={DOCTORS[1].image}></DoctorImage><CaptionStyle>Dr. One</CaptionStyle></DoctorImageContainer>
        <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={DOCTORS[1].image}></DoctorImage><CaptionStyle>Dr. One</CaptionStyle></DoctorImageContainer> */}
        </div>

        </div>
    )
}
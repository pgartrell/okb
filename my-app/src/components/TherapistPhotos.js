import * as React from 'react';
import { THERAPISTS } from '../shared/therapists';
import { CaptionStyle, DoctorImage, DoctorImageContainer, SubCaptionStyle } from '../styles/OurDoctorStyles.styles';
import { Row, Col } from 'react-bootstrap';

const therapistPagePicsTop = THERAPISTS.map((doctor, index) => {
    if (index < 12) {
    return (
        <Col xs={4} sm={3} lg={2}>
        <DoctorImageContainer className="col-2 m-3">
        <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
        <CaptionStyle>
            {doctor.name}
            <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
        </CaptionStyle></DoctorImageContainer></Col>


    )}})

    const therapistPagePicsBottom = THERAPISTS.map((doctor, index) => {
        if (index > 11) {
        return (
            <Col xs={4} sm={3} lg={2}>
            <DoctorImageContainer className="col-2 m-3">
            <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
            <CaptionStyle>
                {doctor.name}
                <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
            </CaptionStyle></DoctorImageContainer></Col>
    
    
        )}})

export function TherapistPhotosTop() {
    return (
        <Row>
            {therapistPagePicsTop}
        </Row>
    )
}

export function TherapistPhotosBottom() {
    return (
        <Row>
            {therapistPagePicsBottom}
        </Row>
    )
}
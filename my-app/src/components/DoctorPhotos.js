import React, { useState } from 'react';
import { DOCTORS } from '../shared/doctors';
import { CaptionStyle, DoctorImage, DoctorImageContainer, SubCaptionStyle } from '../styles/OurDoctorStyles.styles';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const doctorPagePicsTop = DOCTORS.map((doctor, index) => {
    if (index < 12) {
        return (
            <Col xs={4} sm={3} lg={2}>
                <Link to={`/doctorPage/${doctor.id}`}>
                    <DoctorImageContainer key = {doctor.id} lassName="m-3">
                        <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
                        <CaptionStyle>
                            {doctor.name}
                            <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
                        </CaptionStyle>
                    </DoctorImageContainer>
                </Link>
            </Col>
        )
    }
})

const doctorPagePicsBottom = DOCTORS.map((doctor, index) => {
        if (index > 11) {
        return (
            <Col xs={4} sm={3} lg={2}>
                <Link to={`/doctorPage/${doctor.id}`}>
                <DoctorImageContainer key = {doctor.id} className="m-3">
            <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
            <CaptionStyle>
                {doctor.name}
                <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
            </CaptionStyle></DoctorImageContainer></Link></Col>

        )}})

// const showDocBio = (doctor) => {
//     return (
//         <DoctorImage src={doctor.image}></DoctorImage>
//     )
// }

// export function RenderDoctorPhotosOrBios() {
//     const [allPics, showAllPics] = useState(true);
//     const [selectedBio] = useState({});

//     onBioSelect(doctor) {
//         selectedBio = doctor;
//     }

//     const doctorPagePicsBottom = DOCTORS.map((doctor, index) => {
//         if (index > 11) {
//         return (
//             <Col xs={4} sm={3} lg={2}>
//                 <DoctorImageContainer key = {doctor.id} className="m-3" onClick={() => {showAllPics(!allPics); showDocBio(doctor); console.log(); showBio(bio = doctor)}}>
//             <DoctorImage src={doctor.image} alt={doctor.alt}></DoctorImage>
//             <CaptionStyle>
//                 {doctor.name}
//                 <SubCaptionStyle>{doctor.specialty}</SubCaptionStyle>
//             </CaptionStyle></DoctorImageContainer></Col>

//         )}})

//     if (allPics) {
//         return (
//             <Row>
//                 {doctorPagePicsBottom}
//             </Row>
//         )
//     } else { return ( <h1>{bio}</h1>)}

// }

export function DoctorPhotosTop() {
    return (
        <Row>
            {doctorPagePicsTop}
        </Row>
    )
}

export function DoctorPhotosBottom() {
    return (
        <Row>
            {doctorPagePicsBottom}
        </Row>
    )
}
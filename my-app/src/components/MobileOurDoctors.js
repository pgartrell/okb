import * as React from 'react';
import { Link } from 'react-router-dom';
import { OurTherapistStyles, DoctorImage } from "../styles/OurTherapistStyles.styles.js";
import { Card } from '@mui/material';
import { DOCTORS } from '../shared/doctors';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

  const mobileOurTherapists = DOCTORS.map(therapist => {
    return (<Card className='mobile-clinic-doctor-avatar-card'>
    <DoctorImage src={therapist.image} alt={therapist.alt}></DoctorImage>
    <h5 style={{marginBottom:0}}>{therapist.name}</h5>
    <p>{therapist.specialty}</p>
</Card>)})

export default function OurDoctorCarouselSection() {
    return (
        <OurTherapistStyles className='container'>
            <div className='row'>
                <h1>Our Doctors</h1>
                <p className="m-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='row m-4 d-none d-xl-block'>
              <Carousel show={7} slide={3} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={faAngleRight} size='2x' className='fontawesome-carousel-icon'/>} leftArrow={<FontAwesomeIcon icon={faAngleLeft} size='2x' className='fontawesome-carousel-icon'/>}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-none d-lg-block d-xl-none'>
              <Carousel show={6} slide={3} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={faAngleRight} size='2x' className='fontawesome-carousel-icon'/>} leftArrow={<FontAwesomeIcon icon={faAngleLeft} size='2x' className='fontawesome-carousel-icon'/>}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-none d-md-block d-lg-none'>
              <Carousel show={5} slide={2} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={faAngleRight} size='2x' className='fontawesome-carousel-icon'/>} leftArrow={<FontAwesomeIcon icon={faAngleLeft} size='2x' className='fontawesome-carousel-icon'/>}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-md-none'>
              <Carousel show={4} slide={2} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={faAngleRight} size='2x' className='fontawesome-carousel-icon'/>} leftArrow={<FontAwesomeIcon icon={faAngleLeft} size='2x' className='fontawesome-carousel-icon'/>}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-2'>
                <Link to='/DoctorsPage' style={{textDecoration: 'none'}}><button className="btn-okb-secondary">
                Meet Our Doctors
                </button></Link>
            </div>
      </OurTherapistStyles>
    );
}
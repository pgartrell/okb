import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { OurTherapistStyles, DoctorImage } from "../styles/OurTherapistStyles.styles.js";
import DoctorImage1 from '../images/doctor1.jpg';
import { Card } from '@mui/material';
import { THERAPISTS } from '../shared/therapists';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const JoinButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: '50px',
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'gainsboro',
      borderColor: 'black',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'gray',
      borderColor: 'black',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(220,220,220,.5)',
    },
  });

  const mobileOurTherapists = THERAPISTS.map(therapist => {
    return (<Card className='mobile-clinic-doctor-avatar-card'>
    <DoctorImage src={therapist.image}></DoctorImage>
    <h5 style={{marginBottom:0}}>{therapist.name}</h5>
    <p>{therapist.specialty}</p>
</Card>)})

export default function OurTherapistSection() {
    return (
        <OurTherapistStyles className='container'>
            <div className='row'>
                <h1>Our Therapists</h1>
                <p className="m-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='row m-4 d-none d-xl-block'>
              <Carousel show={7} slide={3} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={false} />} leftArrow={<FontAwesomeIcon icon={false} />}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-none d-lg-block d-xl-none'>
              <Carousel show={6} slide={3} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={false} />} leftArrow={<FontAwesomeIcon icon={false} />}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-none d-md-block d-lg-none'>
              <Carousel show={5} slide={2} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={false} />} leftArrow={<FontAwesomeIcon icon={false} />}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-4 d-md-none'>
              <Carousel show={4} slide={2} responsive={true} swiping={true} rightArrow={<FontAwesomeIcon icon={false} />} leftArrow={<FontAwesomeIcon icon={false} />}>
                {mobileOurTherapists}
                </Carousel>
            </div>
            <div className='row m-2'>
                <Link to='/onlineTherapyPage' style={{textDecoration: 'none'}}><JoinButton variant="contained" disableRipple>
                Meet Our Volunteers
                </JoinButton></Link>
            </div>
      </OurTherapistStyles>
    );
}
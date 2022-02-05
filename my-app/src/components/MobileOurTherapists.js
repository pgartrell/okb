import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { OurTherapistStyles, DoctorImage } from "../styles/OurTherapistStyles.styles.js";
import DoctorImage1 from '../images/doctor1.jpg';
import { Card } from '@mui/material';
import { THERAPISTS } from '../shared/therapists';


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
            <div className='row m-4'>
                {mobileOurTherapists}
                {/* <Card className='mobile-clinic-doctor-avatar-card'>
                    <DoctorImage src={DoctorImage1}></DoctorImage>
                    <h5 style={{marginBottom:0}}>Dr. Name</h5>
                    <p>specialty</p>
                </Card>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage> */}
            </div>
            <div className='row m-2'>
                <Link to='/onlineTherapyPage' style={{textDecoration: 'none'}}><JoinButton variant="contained" disableRipple>
                Meet Our Volunteers
                </JoinButton></Link>
            </div>
      </OurTherapistStyles>
    );
}
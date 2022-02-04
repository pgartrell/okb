import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { OurTherapistStyles, DoctorImage } from "../styles/OurTherapistStyles.styles.js";
import DoctorImage1 from '../images/doctor1.jpg';


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

export default function OurTherapistSection() {
    return (
        <OurTherapistStyles className='container'>
            <div className='row'>
                <h1>Our Therapists</h1>
                <p className="m-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='row m-4'>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
                <DoctorImage src={DoctorImage1}></DoctorImage>
            </div>
            <div className='row m-2'>
                <Link to='/onlineTherapyPage' style={{textDecoration: 'none'}}><JoinButton variant="contained" disableRipple>
                Join our team
                </JoinButton></Link>
            </div>
      </OurTherapistStyles>
    );
}
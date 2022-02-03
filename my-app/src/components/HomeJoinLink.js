import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { JoinLinkSection } from "../styles/HomeJoinLink.styles.js";

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

export default function HomeJoinLink() {
    return (
        <JoinLinkSection>
            <h3 style={{color: 'white'}}>Our Team</h3>
            <p className="m-5" style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Link to='/workWithUsPage' style={{textDecoration: 'none'}}><JoinButton variant="contained" disableRipple>
        Join our team
      </JoinButton></Link>
      </JoinLinkSection>
    );
}
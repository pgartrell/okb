import React from "react";
import { Link } from "react-router-dom";

export default function DoctorPageBottomButtons() {
    return (
        <div className="m-3">
            <Link to='/mobileClinicPage' style={{textDecoration: 'none'}}>
                <button className='btn-okb-secondary'>
                    Back
                </button>
            </Link>
            <Link to='/appointmentPage' style={{textDecoration: 'none'}}>
                <button className='btn-okb-primary'>
                    Get Started
                </button>
            </Link>
        </div>
    )
};
import React from "react";
import { Link } from "react-router-dom";

export default function TherapistPageBottomButtons() {
    return (
        <div className="m-3">
            <Link to='/onlineTherapyPage' style={{textDecoration: 'none'}}>
                <button className='btn-okb-secondary'>
                    Back
                </button>
            </Link>
            <Link to='/TherapyChatFormPage' style={{textDecoration: 'none'}}>
                <button className='btn-okb-primary'>
                    Chat Now
                </button>
            </Link>
        </div>
    )
};
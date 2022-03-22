import React from "react";
import { Link } from "react-router-dom";

export default function TherapistsPageIntro() {
    return (
        <div>
            <h1 className="page-intro-title">
                Our Therapists
            </h1>
            <p className="page-intro-paragraph">
                Phasellus euismod velit lacus, ut congue mauris faucibus sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tincidunt volutpat quam id egestas. Morbi interdum, purus in lacinia pharetra, nibh magna aliquam nisl, eu vehicula nisl justo sed neque. Vivamus justo ex, euismod sed urna sed, consequat tincidunt sapien.
            </p>
            <div  className="d-flex text-left">
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
        </div>
    )
};
import React from "react";

export default function DoctorPageIntro() {
    return (
        <div>
            <h1 className="page-intro-title">
                Our Doctors
            </h1>
            <p className="page-intro-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor dui, cursus sit amet consectetur vitae, condimentum a libero. Etiam vestibulum orci nec eleifend pretium. In ornare justo a arcu pellentesque, non tempor enim pretium. Integer blandit dolor turpis. Nam tristique vestibulum dolor at interdum. Ut scelerisque mattis lorem tincidunt maximus.
            </p>
            <div  className="d-flex text-left">
            <button className='btn-okb-secondary'>
                Back
            </button>
            <button className='btn-okb-primary'>
                Get Started
            </button>
            </div>
        </div>
    )
};
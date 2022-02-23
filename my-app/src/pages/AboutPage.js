import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutFoundersStory from '../components/AboutFoundersStory';
import AboutOurVision from '../components/AboutOurVision';
import AboutOurMission from '../components/AboutOurMission';

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <AboutFoundersStory />
            <AboutOurVision />
            <AboutOurMission />
        </div>
    );
}
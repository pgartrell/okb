import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutFoundersStory from '../components/AboutFoundersStory';
import AboutOurVision from '../components/AboutOurVision';
import AboutOurMission from '../components/AboutOurMission';
import AboutOurTeam from '../components/AboutOurTeam';

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <AboutFoundersStory />
            <AboutOurVision />
            <AboutOurMission />
            <AboutOurTeam />
        </div>
    );
}
import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutFoundersStory from '../components/AboutFoundersStory';
import AboutOurVision from '../components/AboutOurVision';

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <AboutFoundersStory />
            <AboutOurVision />
        </div>
    );
}
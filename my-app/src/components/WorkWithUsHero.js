import React from 'react';
import { WWUJumbotronContainer, WWUHomeHeroTitle, WWUHomeHeroSubitle, WWUHeroTitleContainer } from '../styles/WorkWithUsHero.styles.js';

export default function WorkWithUsHero() {
    return (
        <WWUJumbotronContainer>
            <WWUHeroTitleContainer>
                <WWUHomeHeroTitle>
                    Join Our Team
                </WWUHomeHeroTitle>    
                <WWUHomeHeroSubitle>
                    Be a part of our mission by volunteering in Ghana or joining our internship programs.
                </WWUHomeHeroSubitle>
            </WWUHeroTitleContainer>
        </WWUJumbotronContainer>
    );
}
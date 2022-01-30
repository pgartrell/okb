import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Footer() {
    return (
        <footer>
            <div>
                <ul>
                    <h3>Menu</h3>
                    <li>Who We Are</li>
                    <li>What We Do</li>
                    <li>Our Impact</li>
                    <li>Work With Us</li>
                    <li>Donate</li>
                </ul>
            </div>
            <div>
                <FontAwesomeIcon icon={['fal', 'coffee']} />
            </div>
        </footer>
    );
}
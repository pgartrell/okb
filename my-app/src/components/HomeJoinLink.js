import * as React from 'react';
import { Link } from 'react-router-dom';
import { JoinLinkSection } from "../styles/HomeJoinLink.styles.js";

export default function HomeJoinLink() {
    return (
        <JoinLinkSection>
            <h3 className="joinlink-title">Our Team</h3>
            <div className="joinlink-text-section">
                <p className="m-5 joinlink-text d-none d-md-block" style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <Link to='/workWithUsPage' style={{textDecoration: 'none'}}>
                <button className="btn-okb-secondary">Join our team</button>
            </Link>
      </JoinLinkSection>
    );
}
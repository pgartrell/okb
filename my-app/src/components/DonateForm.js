import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function DonateForm() {
    return (
        <div>
            <FontAwesomeIcon icon={faHeart} size="5x" style={{color: "red"}}/>
            <h1>Donate to Our Cause</h1>
            <p>Use the form below to enter a donation amount.</p>
            <Container>
            <h3>Choose Your Donation Frequency</h3>
            <button className="btn-okb-secondary">
        One Time
      </button>
      <button className="btn-okb-secondary">
        Monthly
      </button>
      <button className="btn-okb-secondary">
        Quarterly
      </button>
      <button className="btn-okb-secondary">
        Annually
      </button>
            <h3>Choose a Donation Level</h3>
            <button className="btn-okb-secondary">
        $25
      </button>
      <button className="btn-okb-secondary">
        $50
      </button><button className="btn-okb-secondary">
        $100
      </button><button className="btn-okb-secondary">
        $250
      </button><button className="btn-okb-secondary">
        $500
      </button><button className="btn-okb-secondary">
        $1000
      </button>
      <form>
      <label><h4>Or enter your own amount:</h4>
        <p>$</p><input type="text" />
      </label>
    </form>
      <button className="btn-okb-secondary">
        Continue
      </button>
      </Container>
        </div>
    );
}
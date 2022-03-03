import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function DonateForm() {
    return (
        <div>
            <div className="donateSection">
                <FontAwesomeIcon icon={faHeart} size="5x" style={{color: "red"}}/>
            </div>
            <div className="donateSection">
                <h1 className="donateFormHeader">Donate to Our Cause</h1>
                <p>Use the form below to enter a donation amount.</p>
            </div>
            <Container className="donateSection">
                <Row>
                    <h3>Choose Your Donation Frequency</h3>
                    <Col>
                        <button className="btn-donate">
                            One Time
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            Monthly
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            Quarterly
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            Annually
                        </button>
                    </Col>
                </Row>
                <Row>
                    <h3>Choose a Donation Level</h3>
                    <Col>
                        <button className="btn-donate">
                            $25
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            $50
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            $100
                        </button> 
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            $250
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            $500
                        </button> 
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            $1000
                        </button> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <form>
                    <label><h4>Or enter your own amount:</h4>
                        $<input type="text" />
                    </label>
                    </form>
                    <button className="btn-donate">
                        Continue
                    </button>
                    </Col>
                </Row>
      </Container>
        </div>
    );
}
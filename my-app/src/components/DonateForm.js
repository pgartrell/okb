import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function DonateForm() {
   
    const [styleOneTime, setStyleOneTime] = useState("btn-donate-selected");
    const [styleMonthly, setStyleMonthly] = useState("btn-donate");
    const [styleQuarterly, setStyleQuarterly] = useState("btn-donate");
    const [styleAnnually, setStyleAnnually] = useState("btn-donate");

    const [bronzeAmount, setBronzeAmount] = useState(25);
    const [silverAmount, setSilverAmount] = useState(50);
    const [goldAmount, setGoldAmount] = useState(100);
    const [platinumAmount, setPlatinumAmount] = useState(250);
    const [diamondAmount, setDiamondAmount] = useState(500);
    const [philanthropistAmount, setPhilanthropistAmount] = useState(1000);

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
                            <button className={styleOneTime} onClick={() => {
                                setStyleMonthly("btn-donate"); 
                                setStyleOneTime("btn-donate-selected");
                                setStyleQuarterly("btn-donate");
                                setStyleAnnually("btn-donate"); 
                                setBronzeAmount(25); 
                                setSilverAmount(50); 
                                setGoldAmount(100); 
                                setPlatinumAmount(250); 
                                setDiamondAmount(500); 
                                setPhilanthropistAmount(1000);
                            }}>
                                One Time
                            </button>
                        </Col>
                        <Col>
                            <button className={styleMonthly} onClick={() => {
                                setStyleMonthly("btn-donate-selected"); 
                                setStyleOneTime("btn-donate");
                                setStyleQuarterly("btn-donate");
                                setStyleAnnually("btn-donate"); 
                                setBronzeAmount(5); 
                                setSilverAmount(10); 
                                setGoldAmount(25); 
                                setPlatinumAmount(50); 
                                setDiamondAmount(100); 
                                setPhilanthropistAmount(250);
                            }}>
                                Monthly
                            </button>
                        </Col>
                        <Col>
                            <button className={styleQuarterly} onClick={() => {
                                setStyleMonthly("btn-donate"); 
                                setStyleOneTime("btn-donate");
                                setStyleQuarterly("btn-donate-selected");
                                setStyleAnnually("btn-donate"); 
                                setBronzeAmount(15); 
                                setSilverAmount(30); 
                                setGoldAmount(75); 
                                setPlatinumAmount(150); 
                                setDiamondAmount(300); 
                                setPhilanthropistAmount(750);
                            }}>
                                Quarterly
                            </button>
                        </Col>
                        <Col>
                            <button className={styleAnnually} onClick={() => {
                                setStyleMonthly("btn-donate"); 
                                setStyleOneTime("btn-donate");
                                setStyleQuarterly("btn-donate");
                                setStyleAnnually("btn-donate-selected"); 
                                setBronzeAmount(60); 
                                setSilverAmount(120); 
                                setGoldAmount(300); 
                                setPlatinumAmount(600); 
                                setDiamondAmount(1200); 
                                setPhilanthropistAmount(3000);
                            }}>
                                Annually
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Choose a Donation Level</h3>
                        <Col>
                            <button className="btn-donate">
                                ${bronzeAmount}
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            ${silverAmount}
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            ${goldAmount}
                        </button> 
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            ${platinumAmount}
                        </button>
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            ${diamondAmount}
                        </button> 
                    </Col>
                    <Col>
                        <button className="btn-donate">
                            ${philanthropistAmount}
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
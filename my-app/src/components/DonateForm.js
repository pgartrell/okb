import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form } from 'react-bootstrap';
 
export default function DonateForm() {
   
    const [styleOneTime, setStyleOneTime] = useState("btn-donate-selected");
    const [styleMonthly, setStyleMonthly] = useState("btn-donate");
    const [styleQuarterly, setStyleQuarterly] = useState("btn-donate");
    const [styleAnnually, setStyleAnnually] = useState("btn-donate");

    const [styleBronze, setStyleBronze] = useState("btn-donate");
    const [styleSilver, setStyleSilver] = useState("btn-donate");
    const [styleGold, setStyleGold] = useState("btn-donate");
    const [stylePlatinum, setStylePlatinum] = useState("btn-donate");
    const [styleDiamond, setStyleDiamond] = useState("btn-donate");
    const [stylePhilanthropist, setStylePhilanthropist] = useState("btn-donate");

    const [bronzeAmount, setBronzeAmount] = useState(25);
    const [silverAmount, setSilverAmount] = useState(50);
    const [goldAmount, setGoldAmount] = useState(100);
    const [platinumAmount, setPlatinumAmount] = useState(250);
    const [diamondAmount, setDiamondAmount] = useState(500);
    const [philanthropistAmount, setPhilanthropistAmount] = useState(1000);

    const [donateMessage, setDonateMessage] = useState(<div><p>Please select an amount.</p></div>)

    const [donationAmount, setDonationAmount] = useState(0)
    const [donationFrequency, setDonationFrequency] = useState("One Time")

    function handleSubmit() {
        console.log(`Donation Choice: ${JSON.stringify(donationAmount)}, ${JSON.stringify(donationFrequency)}`);
        alert(`Donation Choice: ${JSON.stringify(donationAmount)}, ${JSON.stringify(donationFrequency)}`);
    }


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
                                setStyleBronze("btn-donate");
                                setStyleSilver("btn-donate");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate"); 
                                setBronzeAmount(25); 
                                setSilverAmount(50); 
                                setGoldAmount(100); 
                                setPlatinumAmount(250); 
                                setDiamondAmount(500); 
                                setPhilanthropistAmount(1000);
                                setDonationAmount(0);
                                setDonationFrequency("One Time");
                                setDonateMessage(<div><p>Please select an amount.</p></div>)
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
                                setStyleBronze("btn-donate");
                                setStyleSilver("btn-donate");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate");  
                                setBronzeAmount(5); 
                                setSilverAmount(10); 
                                setGoldAmount(25); 
                                setPlatinumAmount(50); 
                                setDiamondAmount(100); 
                                setPhilanthropistAmount(250);
                                setDonationAmount(0);
                                setDonationFrequency("Monthly");
                                setDonateMessage(<div><p>Please select an amount.</p></div>)
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
                                setStyleBronze("btn-donate");
                                setStyleSilver("btn-donate");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate");  
                                setBronzeAmount(15); 
                                setSilverAmount(30); 
                                setGoldAmount(75); 
                                setPlatinumAmount(150); 
                                setDiamondAmount(300); 
                                setPhilanthropistAmount(750);
                                setDonationAmount(0);
                                setDonationFrequency("Quarterly");
                                setDonateMessage(<div><p>Please select an amount.</p></div>)
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
                                setStyleBronze("btn-donate");
                                setStyleSilver("btn-donate");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate");  
                                setBronzeAmount(60); 
                                setSilverAmount(120); 
                                setGoldAmount(300); 
                                setPlatinumAmount(600); 
                                setDiamondAmount(1200); 
                                setPhilanthropistAmount(3000);
                                setDonationAmount(0);
                                setDonationFrequency("Annually");
                                setDonateMessage(<div><p>Please select an amount.</p></div>)
                            }}>
                                Annually
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Choose a Donation Level</h3>
                        <Col>
                            <button className={styleBronze} onClick={() => {
                                setStyleBronze("btn-donate-selected");
                                setStyleSilver("btn-donate");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate");
                                setDonationAmount(bronzeAmount);
                                setDonateMessage(<div><h4>Bronze(${bronzeAmount})</h4><p>Thanks so much for your sustaining gift!</p></div>);
                            }}>
                                ${bronzeAmount}
                            </button>
                        </Col>
                        <Col>
                            <button className={styleSilver} onClick={() => {
                                setStyleBronze("btn-donate");
                                setStyleSilver("btn-donate-selected");
                                setStyleGold("btn-donate");
                                setStylePlatinum("btn-donate");
                                setStyleDiamond("btn-donate");
                                setStylePhilanthropist("btn-donate");
                                setDonationAmount(silverAmount);
                                setDonateMessage(<div><h4>Silver(${silverAmount})</h4><p>You're a beacon of good in the world.</p></div>);
                            }}>
                                ${silverAmount}
                            </button>
                        </Col>
                        <Col>
                            <button className={styleGold} onClick={() => {
                                    setStyleBronze("btn-donate");
                                    setStyleSilver("btn-donate");
                                    setStyleGold("btn-donate-selected");
                                    setStylePlatinum("btn-donate");
                                    setStyleDiamond("btn-donate");
                                    setStylePhilanthropist("btn-donate");
                                    setDonationAmount(goldAmount);
                                    setDonateMessage(<div><h4>Gold(${goldAmount})</h4><p>Your support helps us create long-lasting impact.</p></div>);
                                }}>
                                ${goldAmount}
                            </button> 
                        </Col>
                        <Col>
                            <button className={stylePlatinum} onClick={() => {
                                    setStyleBronze("btn-donate");
                                    setStyleSilver("btn-donate");
                                    setStyleGold("btn-donate");
                                    setStylePlatinum("btn-donate-selected");
                                    setStyleDiamond("btn-donate");
                                    setStylePhilanthropist("btn-donate");
                                    setDonationAmount(platinumAmount);
                                    setDonateMessage(<div><h4>Platinum(${platinumAmount})</h4><p>Grab a mirror - you're what making a difference looks like!</p></div>);

                                }}>
                                ${platinumAmount}
                            </button>
                        </Col>
                        <Col>
                            <button className={styleDiamond} onClick={() => {
                                    setStyleBronze("btn-donate");
                                    setStyleSilver("btn-donate");
                                    setStyleGold("btn-donate");
                                    setStylePlatinum("btn-donate");
                                    setStyleDiamond("btn-donate-selected");
                                    setStylePhilanthropist("btn-donate");
                                    setDonationAmount(diamondAmount);
                                    setDonateMessage(<div><h4>Diamond(${diamondAmount})</h4><p>Your kind-o-meter score is way off the charts!</p></div>);
                                }}>
                                ${diamondAmount}
                            </button> 
                        </Col>
                        <Col>
                            <button className={stylePhilanthropist} onClick={() => {
                                    setStyleBronze("btn-donate");
                                    setStyleSilver("btn-donate");
                                    setStyleGold("btn-donate");
                                    setStylePlatinum("btn-donate");
                                    setStyleDiamond("btn-donate");
                                    setStylePhilanthropist("btn-donate-selected");
                                    setDonationAmount(philanthropistAmount);
                                    setDonateMessage(<div><h4>Philanthropist(${philanthropistAmount})</h4><p>Where's your cape? You're a philanthropic superhero.</p></div>);
                                }}>
                                ${philanthropistAmount}
                            </button> 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="donation-message-box">
                                {donateMessage}
                        </Col>
                    </Row>
                    <Row>
                        
                        <h4>Or enter your own amount:</h4>
                        <Col></Col>
                        <Col>
                        <div className="input-group">
                            <span className="input-group-addon">$</span><input type="number" placeholder={donationAmount} className="form-control" /></div>
                            </Col><Col>
                            <Form onSubmit={handleSubmit}>
                        <button className="btn-okb-primary" type='submit'>
                            Continue
                        </button>
                        </Form>
                        </Col>
                        <Col></Col>
                    </Row>
      </Container>
        </div>
    );
}
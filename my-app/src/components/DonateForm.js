import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, FormGroup, FormControl, FormLabel, FormSelect, Label, CustomInput } from 'react-bootstrap';

export default function DonateForm() {
    const [frequencyInfo, setFrequencyInfo] = React.useState();
    // const [selectedButton, setSelectedButton] = React.useState();
    // let selectedButton = "btn-okb-secondary";
   
        const [style, setStyle] = useState("btn-okb-secondary");

        // const changeStyle = () => {
        //     setStyle("btn-okb-primary");
        //   };

   function showAmounts() {
       if (frequencyInfo === 'monthly') {
        //    selectedButton = "btn-okb-primary";
            return(
                <><Col>
                <button className="btn-donate">
                    $5
                </button>
            </Col>
            <Col>
                <button className="btn-donate">
                    $10
                </button>
            </Col>
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
            </Col></>
            )
       } else if (frequencyInfo === 'quarterly') {
            return(
                <><Col>
                <button className="btn-donate">
                    $15
                </button>
            </Col>
            <Col>
                <button className="btn-donate">
                    $30
                </button>
            </Col>
            <Col>
                <button className="btn-donate">
                    $75
                </button> 
            </Col>
            <Col>
                <button className="btn-donate">
                    $150
                </button>
            </Col>
            <Col>
                <button className="btn-donate">
                    $300
                </button> 
            </Col>
            <Col>
                <button className="btn-donate">
                    $750
                </button> 
            </Col></>
            )
      } else if (frequencyInfo === 'annually') {
        return(<>
            <Col>
            <button className="btn-donate">
                $60
            </button>
        </Col>
        <Col>
            <button className="btn-donate">
                $120
            </button>
        </Col>
        <Col>
            <button className="btn-donate">
                $300
            </button> 
        </Col>
        <Col>
            <button className="btn-donate">
                $600
            </button>
        </Col>
        <Col>
            <button className="btn-donate">
                $1200
            </button> 
        </Col>
        <Col>
            <button className="btn-donate">
                $3000
            </button> 
        </Col></>
        )
  } else {
      return (
        <><Col>
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
    </Col></>
      )
  }
   };

//    function buttonOnSelect() {
//        if (selectedButton === 'monthly') {

//        }
//    }

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
                    <FormGroup controlId="frequency">
                        <h3>Choose Your Donation Frequency</h3>
                        <Col>
                            <button className="btn-donate" onClick={() => {setFrequencyInfo("oneTime")}}>
                                One Time
                            </button>
                        </Col>
                        <Col>
                        <button className={style} onClick={() => {setFrequencyInfo("monthly"); setStyle("btn-okb-primary")}}>
                                Monthly
                            </button>
                        </Col>
                        <Col>
                            <button className="btn-donate" onClick={() => {setFrequencyInfo("quarterly")}}>
                                Quarterly
                            </button>
                        </Col>
                        <Col>
                            <button className="btn-donate" onClick={() => {setFrequencyInfo("annually")}}>
                                Annually
                            </button>
                        </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <h3>Choose a Donation Level</h3>
                        {showAmounts()}
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
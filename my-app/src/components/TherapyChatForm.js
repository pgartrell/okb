import { Container } from "@mui/material";
import React, { useState } from "react";
import { Form, FormGroup, Row, Col, FormCheck } from "react-bootstrap";
import { FormP, Labels, LabelsRating } from "../styles/TherapyChatForm.styles";

export default function TherapyChatForm() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    relationship: "",
    beenintherapy: "",
    considertherapy: "",
    session: "",
    physicalhealth: "",
    eatinghabits: "",
    mood: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit() {
    console.log(`Form State: ${JSON.stringify(formData)}`);
    alert(`Form State: ${JSON.stringify(formData)}`);
  }

  function handleClear() {
    setFormData({
      gender: "",
      age: "",
      relationship: "",
      beenintherapy: "",
      considertherapy: "",
      session: "",
      physicalhealth: "",
      eatinghabits: "",
      mood: "",
    });
    console.log(formData);
  }

  return (
    <div className="therapy-form-image">
      <h1 className="therapy-appointment-title">Before we chat...</h1>
      <Container className="therapy-appointment-container">
        <Row>
          <Col>
            <Form>
              <fieldset className="gender-input">
                <FormP>What is your gender?</FormP>

                <FormCheck>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === "male"}
                  />
                  <Labels htmlFor="male">Male</Labels>
                </FormCheck>

                <FormCheck>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === "female"}
                  />
                  <Labels htmlFor="female">Female</Labels>
                </FormCheck>

                <FormCheck>
                  <input
                    type="radio"
                    name="gender"
                    id="non-binary"
                    value="non-binary"
                    onChange={handleChange}
                    checked={formData.gender === "non-binary"}
                  />
                  <Labels htmlFor="non-binary">Non-binary</Labels>
                </FormCheck>

                <FormCheck>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={handleChange}
                    checked={formData.gender === "other"}
                  />
                  <Labels htmlFor="other">Other</Labels>
                </FormCheck>
              </fieldset>

              <fieldset className="relationship-input">
                <FormP>What is your Relationship status?</FormP>{" "}
                {/* "FormP" is From styled components */}
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="single"
                    value="single"
                    onChange={handleChange}
                    checked={formData.relationship === "single"}
                  />
                  <Labels htmlFor="single">Single</Labels>{" "}
                  {/* "Labels" is From styled components */}
                </FormCheck>
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="in-a-relationship"
                    value="in-a-relationship"
                    onChange={handleChange}
                    checked={formData.relationship === "in-a-relationship"}
                  />
                  <Labels htmlFor="in-a-relationship">In a Relationship</Labels>
                </FormCheck>
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="married"
                    value="married"
                    onChange={handleChange}
                    checked={formData.relationship === "married"}
                  />
                  <Labels htmlFor="married">Married</Labels>
                </FormCheck>
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="divorced"
                    value="divorced"
                    onChange={handleChange}
                    checked={formData.relationship === "divorced"}
                  />
                  <Labels htmlFor="divorced">Divorced</Labels>
                </FormCheck>
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="widowed"
                    value="widowed"
                    onChange={handleChange}
                    checked={formData.relationship === "widowed"}
                  />
                  <Labels htmlFor="widowed">Widowed</Labels>
                </FormCheck>
                <FormCheck>
                  <input
                    type="radio"
                    name="relationship"
                    id="other"
                    value="other"
                    onChange={handleChange}
                    checked={formData.relationship === "other"}
                  />
                  <Labels htmlFor="other">Other</Labels>
                </FormCheck>
              </fieldset>

              <fieldset className="gender-input">
                <FormP>Have you ever been in therapy?</FormP>

                <FormCheck>
                  <input
                    type="radio"
                    name="beenintherapy"
                    id="yes"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.beenintherapy === "yes"}
                  />
                  <Labels htmlFor="yes">Yes</Labels>
                </FormCheck>

                <FormCheck>
                  <input
                    type="radio"
                    name="beenintherapy"
                    id="no"
                    value="no"
                    onChange={handleChange}
                    checked={formData.beenintherapy === "no"}
                  />
                  <Labels htmlFor="no">No</Labels>
                </FormCheck>
              </fieldset>

              <fieldset className="physical-health-input">
                <FormP>On a scale of 1-10, how would you rate your current physical health?</FormP>{" "}
                {/* "FormP" is From styled components */}
                
                
                  <input
                    type="radio"
                    name="physicalhealth"
                    id="1"
                    value="1"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "1"}
                  />
                  <LabelsRating htmlFor="1">1</LabelsRating>{" "} {/* "Labels" is From styled components */}                  
                
                
                  <input
                    type="radio"
                    name="physicalhealth"
                    id="2"
                    value="2"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "2"}
                  />
                  <LabelsRating htmlFor="2">2</LabelsRating>{" "} {/* "Labels" is From styled components */} 
                
                  <input
                    type="radio"
                    name="physicalhealth"
                    id="3"
                    value="3"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "3"}
                  />
                  <LabelsRating htmlFor="3">3</LabelsRating>{" "} {/* "Labels" is From styled components */} 

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="4"
                    value="4"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "4"}
                  />
                  <LabelsRating htmlFor="4">4</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="5"
                    value="5"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "5"}
                  />
                  <LabelsRating htmlFor="5">5</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="6"
                    value="6"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "6"}
                  />
                  <LabelsRating htmlFor="6">6</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="7"
                    value="7"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "7"}
                  />
                  <LabelsRating htmlFor="7">7</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="8"
                    value="8"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "8"}
                  />
                  <LabelsRating htmlFor="8">8</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="9"
                    value="9"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "9"}
                  />
                  <LabelsRating htmlFor="9">9</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="physicalhealth"
                    id="10"
                    value="10"
                    onChange={handleChange}
                    checked={formData.physicalhealth === "10"}
                  />
                  <LabelsRating htmlFor="10">10</LabelsRating>{" "}


              </fieldset>

              <fieldset className="physical-health-input">
                <FormP>On a scale of 1-10, how would you rate your current eating habits?</FormP>{" "}
                {/* "FormP" is From styled components */}
                
                
                  <input
                    type="radio"
                    name="eatinghabits"
                    id="1"
                    value="1"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "1"}
                  />
                  <LabelsRating htmlFor="1">1</LabelsRating>{" "} {/* "Labels" is From styled components */}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="2"
                    value="2"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "2"}
                  />
                  <LabelsRating htmlFor="2">2</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="3"
                    value="3"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "3"}
                  />
                  <LabelsRating htmlFor="3">3</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="4"
                    value="4"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "4"}
                  />
                  <LabelsRating htmlFor="4">4</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="5"
                    value="5"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "5"}
                  />
                  <LabelsRating htmlFor="5">5</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="6"
                    value="6"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "6"}
                  />
                  <LabelsRating htmlFor="6">6</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="7"
                    value="7"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "7"}
                  />
                  <LabelsRating htmlFor="7">7</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="8"
                    value="8"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "8"}
                  />
                  <LabelsRating htmlFor="8">8</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="9"
                    value="9"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "9"}
                  />
                  <LabelsRating htmlFor="9">9</LabelsRating>{" "}

                  <input
                    type="radio"
                    name="eatinghabits"
                    id="10"
                    value="10"
                    onChange={handleChange}
                    checked={formData.eatinghabits === "10"}
                  />
                  <LabelsRating htmlFor="10">10</LabelsRating>{" "}

              </fieldset>

              <fieldset className="mood-input">
                <FormP>Are you currently experiencing overwhelming sadness, grief, or depression?</FormP>

                <FormCheck>
                  <input
                    type="radio"
                    name="mood"
                    id="yes"
                    value="yes"
                    onChange={handleChange}
                    checked={formData.mood === "yes"}
                  />
                  <Labels htmlFor="yes">Yes</Labels>
                </FormCheck>

                <FormCheck>
                  <input
                    type="radio"
                    name="mood"
                    id="no"
                    value="no"
                    onChange={handleChange}
                    checked={formData.mood === "no"}
                  />
                  <Labels htmlFor="no">No</Labels>
                </FormCheck>
              </fieldset>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

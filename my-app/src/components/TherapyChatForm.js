import { Container } from "@mui/material";
import React, { useState } from "react";
import { Form, FormGroup, Row, Col, FormCheck } from "react-bootstrap";
import { FormP, Labels, FormInputs } from "../styles/TherapyChatForm.styles";
import "../styles/TherapyChatForm.styles.css";

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

  console.log(formData.gender);
  console.log(formData.age);
  console.log(formData.relationship);
  console.log(formData.beenintherapy);
  console.log(formData.considertherapy);

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

    console.log(formData);
  }

  // function handleClear() {
  //   setFormData({
  //     gender: "",
  //     age: "",
  //     relationship: "",
  //     beenintherapy: "",
  //     considertherapy: "",
  //     session: "",
  //     physicalhealth: "",
  //     eatinghabits: "",
  //     mood: "",
  //   });
  //   console.log(formData);
  // }

  return (
    <div className="therapy-form-image">
      <h1 className="therapy-appointment-title">Before we chat...</h1>
      <Container className="therapy-appointment-container">
        <Row className="tcfRow" style={{ backgroundColor: "#e6e6e6" }}>
          <Col xs={12} lg={6}>
            <Form onSubmit={handleSubmit}>
              <div
                className="form-group col-12 gender-input"
                style={{ float: "left", textAlign: "left", padding: "20px" }}
              >
                <FormP>What is your gender?</FormP>
                <fieldset>
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
              </div>

              <div
                className="form-group col-12 relationship-input"
                style={{ float: "left", textAlign: "left", padding: "20px" }}
              >
                <FormP>What is your Relationship status?</FormP>{" "}
                {/* "FormP" is From styled components */}
                <fieldset>
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
                    <Labels htmlFor="in-a-relationship">
                      In a Relationship
                    </Labels>
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
              </div>

              <div
                className="form-group col-12 beenintherapy-input"
                style={{ textAlign: "left", float: "left", padding: "20px" }}
              >
                <FormP>Have you been in therapy?</FormP>{" "}
                {/* "FormP" is From styled components */}
                <fieldset>
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
              </div>

              <div
                style={{ textAlign: "left", float: "left", padding: "20px" }}
              >
                <Col>
                  <Form.Group className="mb-3" controlId="textarea1">
                    <FormP>What made you consider therapy?</FormP>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData.considertherapy}
                      placeholder="Please insert input here"
                      onChange={handleChange}
                      name="considertherapy"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="textarea1">
                    <FormP>What do you hope to gain from today's session</FormP>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData.session}
                      placeholder="Please insert input here"
                      onChange={handleChange}
                      name="session"
                    />
                  </Form.Group>
                </Col>
              </div>

              <div
                className="form-group col-sm-12 physical-health-input"
                style={{ textAlign: "left", float: "left", padding: "20px" }}
              >
                <FormP>
                  On a scale of 1-10 how would you rate your current physical
                  health?
                </FormP>{" "}
                {/* "FormP" is From styled components */}
                <fieldset>
                  <div className="radio-container">
                    <label for="poor" style={{ color: "red" }}>
                      Poor
                    </label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="1"
                      value="1"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "1"}
                    />
                    <label for="1">1</label>{" "}
                    {/* "Labels" is From styled components */}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="2"
                      value="2"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "2"}
                    />
                    <label for="2">2</label>{" "}
                    {/* "Labels" is From styled components */}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="3"
                      value="3"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "3"}
                    />
                    <label for="3">3</label>{" "}
                    {/* "Labels" is From styled components */}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="4"
                      value="4"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "4"}
                    />
                    <label for="4">4</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="5"
                      value="5"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "5"}
                    />
                    <label for="5">5</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="6"
                      value="6"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "6"}
                    />
                    <label for="6">6</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="7"
                      value="7"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "7"}
                    />
                    <label for="7">7</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="8"
                      value="8"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "8"}
                    />
                    <label for="8">8</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="9"
                      value="9"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "9"}
                    />
                    <label for="9">9</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="physicalhealth"
                      id="10"
                      value="10"
                      onChange={handleChange}
                      checked={formData.physicalhealth === "10"}
                    />
                    <label for="10">10</label>{" "}
                  </div>

                  <div className="radio-container">
                    <label for="great" style={{ color: "red" }}>
                      Great
                    </label>
                  </div>
                </fieldset>
              </div>

              <div
                className="form-group col-sm-12 eating-habits-input"
                style={{ textAlign: "left", float: "left", padding: "20px" }}
              >
                <FormP>
                  On a scale of 1-10 how would you rate your current physical
                  health?
                </FormP>{" "}
                {/* "FormP" is From styled components */}
                <fieldset>
                  {/* "FormP" is From styled components */}
                  <div className="radio-container">
                    <label for="poor" style={{ color: "red" }}>
                      Poor
                    </label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="1"
                      value="1"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "1"}
                    />
                    <label for="1">1</label>{" "}
                  </div>
                  {/* "Labels" is From styled components */}

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="2"
                      value="2"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "2"}
                    />
                    <label for="2">2</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="3"
                      value="3"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "3"}
                    />
                    <label for="3">3</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="4"
                      value="4"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "4"}
                    />
                    <label for="4">4</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="5"
                      value="5"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "5"}
                    />
                    <label for="5">5</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="6"
                      value="6"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "6"}
                    />
                    <label for="6">6</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="7"
                      value="7"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "7"}
                    />
                    <label for="7">7</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="8"
                      value="8"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "8"}
                    />
                    <label for="8">8</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="9"
                      value="9"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "9"}
                    />
                    <label for="9">9</label>{" "}
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="eatinghabits"
                      id="10"
                      value="10"
                      onChange={handleChange}
                      checked={formData.eatinghabits === "10"}
                    />
                    <label for="10">10</label>{" "}
                  </div>

                  <div className="radio-container">
                    <label for="great" style={{ color: "red" }}>
                      Great
                    </label>
                  </div>
                </fieldset>
              </div>

              <div
                className="form-group col-sm-12 mood-input"
                style={{ textAlign: "left", float: "left", padding: "20px" }}
              >
                <FormP>
                  Are you currently experiencing overwhelming sadness, grief, or
                  depression?
                </FormP>{" "}
                {/* "FormP" is From styled components */}
                <fieldset>
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
              </div>

              <br />
              <br />
            </Form>
          </Col>
        </Row>
        <button className="btn-okb-primary okb-chat-btn" onPress={handleSubmit}>
          Submit
        </button>
      </Container>
    </div>
  );
}

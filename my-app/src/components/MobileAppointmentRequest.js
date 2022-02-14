import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';

export default function MobileAppointmentRequest() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        surName: '',
        gender: '',
        phone: '',
        birth: '',
        clinicSite: '',
        firstTime: '',
        reason: ''
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {
        console.log(`Form State: ${JSON.stringify(formData)}`);
        alert(`Form State: ${JSON.stringify(formData)}`);
    }

    return (
        <div className="appointment-image">
            <h1>Client's Details</h1>
            <Container className="appointment-container">
                <Row>
                    <Col xs={12} lg={6}>
                        <Form onSubmit={handleSubmit} className="appointment-form">
                                <h3>Personal Details</h3>
                                <FormGroup controlId="firstName" className="">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl
                                        model='.firstName'
                                        id='firstName'
                                        name='firstName'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.firstName}
                                    />
                                </FormGroup>
                                <FormGroup controlId="surName" className="">
                                    <FormLabel>Surname</FormLabel>
                                    <FormControl
                                        model='.surName'
                                        id='surName'
                                        name='surName'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.surName}
                                    />
                                </FormGroup>
                                <FormGroup controlId="gender" className="">
                                    <FormLabel>Gender</FormLabel>
                                    <FormSelect
                                        model='.gender'
                                        id='gender'
                                        name='gender'
                                        type="select"
                                        onChange={handleChange}
                                        value={formData.gender}>
                                            <option>-- Select Gender --</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </FormSelect>
                                </FormGroup>
                                <FormGroup controlId="phone" className="">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl
                                        model='.phone'
                                        id='phone'
                                        name='phone'
                                        type="select"
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                </FormGroup>
                                <FormGroup controlId="birth" className="">
                                    <FormLabel>Date of Birth</FormLabel>
                                    <FormControl
                                        model='.birth'
                                        id='birth'
                                        name='birth'
                                        type="date"
                                        onChange={handleChange}
                                        value={formData.birth}
                                    />
                                </FormGroup>
                                <hr className="d-lg-none"/>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form onSubmit={handleSubmit} className="appointment-form">
                                <h3>Additional Info</h3>
                                <FormGroup controlId="clinicSite" className="">
                                    <FormLabel>Mobile Clinic Site</FormLabel>
                                    <FormSelect
                                        model='.clinicSite'
                                        id='clinicSite'
                                        name='clinicSite'
                                        type="select"
                                        onChange={handleChange}
                                        value={formData.clinicSite}>
                                            <option>-- Select Clinic --</option>
                                            <option value="clinic1">Clinic 1</option>
                                            <option value="clinic2">Clinic 2</option>
                                            <option value="clinic3">Clinic 3</option>
                                        </FormSelect>
                                </FormGroup>
                                <FormGroup check>
                                    <p>First time visiting our mobile clinic?</p>
                                    <FormCheck
                                        inline
                                        type="radio"
                                        name='firstTime'
                                        id='yes'
                                        model='.firstTime'
                                        value='yes'
                                        label="Yes"
                                        onChange={handleChange}
                                        checked={formData.firstTime === 'yes'}
                                    />
                                    <FormCheck
                                        inline
                                        type="radio"
                                        name='firstTime'
                                        id='no'
                                        model='.firstTime'
                                        value='no'
                                        label="No"
                                        onChange={handleChange}
                                        checked={formData.firstTime === 'no'}
                                    />
                                </FormGroup>
                                <FormGroup controlId="reason" className="">
                                    <FormLabel>Reason for Appointment</FormLabel>
                                    <FormControl
                                        model='.reason'
                                        id='reason'
                                        name='reason'
                                        as="textarea"
                                        rows={5}
                                        onChange={handleChange}
                                        value={formData.reason}
                                    />
                                </FormGroup>
                                <button className="btn-clear" type='submit'>Clear</button>
                                <button className="btn-signup" type='submit'>Save</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
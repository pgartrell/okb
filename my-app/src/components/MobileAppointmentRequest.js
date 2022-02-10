import React from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl, FormText, FormLabel } from 'react-bootstrap';

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
        <Container>
            <Row>
                <Col xs={6}>
                    <Form onSubmit={handleSubmit} className="appointment-form">
                            <h3>Personal Details</h3>
                            <FormGroup constrolId="firstName" className="">
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
                            <FormGroup constrolId="surName" className="">
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
                            <FormGroup constrolId="gender" className="">
                                <FormLabel>Gender</FormLabel>
                                <FormControl
                                     model='.gender'
                                     id='gender'
                                     name='gender'
                                     type="select"
                                     onChange={handleChange}
                                     value={formData.gender}
                                />
                            </FormGroup>
                            <FormGroup constrolId="phone" className="">
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
                            <FormGroup constrolId="birth" className="">
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
                            <button className="btn-signup" type='submit'>Sign-up</button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}
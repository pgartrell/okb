import React from 'react';
import {Container, Row, Col, Form, FormGroup, 
    FormLabel, FormControl, ButtonGroup, ToggleButton, FormSelect, FormCheck} 
from 'react-bootstrap';
import countryList from 'react-select-country-list';

export default function StudentVolunteerForm() {
    const [studentFormData, setStudentFormData] = React.useState({
        type: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        ext: "",
        phoneOption: [
            { name: 'Work', value: 'work' },
            { name: 'Mobile', value: 'mobile' },
            { name: 'Home', value: 'home' }
        ],
        address1: "",
        address2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        anonymous: true,
        message: "",
        school: "",
        classYear: "",
        major: "",
        medicine: "",
        experience: "",
        volunteer: "",
        achieve: "",
        resume: ""
      });

      const options = React.useMemo(() => countryList().getLabels(), []);

      function handleChange(event) {
        const {name, value, type, checked} = event.target
        setStudentFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
      function handleSubmit(value) {
        console.log(`Form State: ${JSON.stringify(studentFormData)}`);
        alert(`Form State: ${JSON.stringify(studentFormData)}`);
      }
    return (
        <Container className="volunteer-form-container">
            <h2>Student Volunteer Form</h2>
            <p>Use the form to apply to become a volunteer</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='firstName'>First Name*</FormLabel>
                        <FormControl
                                type='text'
                                name='firstName'
                                id='firstName'
                                placeholder='First Name'
                                value={studentFormData.firstName}
                                onChange={handleChange}
                        />
                    </FormGroup>    
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='lastName'>Last Name*</FormLabel>
                        <FormControl
                                type='text'
                                name='lastName'
                                id='lastName'
                                placeholder='Last Name'
                                value={studentFormData.lastName}
                                onChange={handleChange}
                        />
                    </FormGroup>    
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='email'>Email*</FormLabel>
                        <FormControl
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={studentFormData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                        <FormControl
                            type='phone'
                            name='phone'
                            id='phone'
                            placeholder='+1-123-456-7890'
                            value={studentFormData.phone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='ext'>Ext.</FormLabel>
                        <FormControl
                            type='phone'
                            name='ext'
                            id='ext'
                            placeholder='123'
                            value={studentFormData.ext}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='m-auto'>
                        <ButtonGroup>{studentFormData.phoneOption.map((option, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`option-${idx}`}
                                type='radio'
                                size='md'
                                variant='secondary'
                                name='phoneOption'
                                value={studentFormData.phoneOption.value}
                                checked={handleChange}
                                onChange={(e) => handleChange(e.currentTarget.value)}
                            >
                                {option.name}
                            </ToggleButton>
                        ))}
                        </ButtonGroup>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='address1'>Address Line 1</FormLabel>
                        <FormControl
                            type='address'
                            name='address1'
                            id='address1'
                            placeholder='Address Line 1'
                            value={studentFormData.address1}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='address2'>Address Line 2</FormLabel>
                        <FormControl
                            type='address'
                            name='address2'
                            id='address2'
                            placeholder='Address Line 2'
                            value={studentFormData.address2}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='city'>City</FormLabel>
                        <FormControl
                            type='city'
                            name='city'
                            id='city'
                            placeholder='City'
                            value={studentFormData.city}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='state'>State/Province</FormLabel>
                        <FormControl
                            type='state'
                            name='state'
                            id='state'
                            placeholder='State/Province'
                            value={studentFormData.state}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='postalCode'>Postal Code</FormLabel>
                        <FormControl
                            type='postal'
                            name='postal'
                            id='postalCode'
                            placeholder='Postal Code'
                            value={studentFormData.postalCode}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3'>
                        <FormLabel htmlFor='country'>Country</FormLabel>
                        <FormSelect>
                            <option>Choose Country</option>
                            <option>Ghana</option>
                            <option>United States</option>
                            {/* <option>{options}</option> */}
                        </FormSelect>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} className='mb-3'>
                        <FormCheck
                            inline
                            type='checkbox'
                            name='anonymous'
                            id='anonymous'
                            value={studentFormData.anonymous}
                            onChange={handleChange}
                        />
                        <FormLabel htmlFor='anonymous'>Make this activity anonymous</FormLabel>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} className='mb-3'>
                        <FormLabel htmlFor='message'>Message of Support (Will be displayed on public site)</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='message'
                            id='message'
                            placeholder='Message'
                            value={studentFormData.message}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={4} className='mb-3'>
                        <FormLabel htmlFor='school'>School Affiliation</FormLabel>
                        <FormControl 
                            type='text'
                            name='school'
                            id='school'
                            placeholder='School Affiliation'
                            value={studentFormData.school}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={4} className='mb-3'>
                        <FormLabel htmlFor='classYear'>Class Year</FormLabel>
                        <FormControl 
                            type='text'
                            name='classYear'
                            id='classYear'
                            placeholder='Class Year'
                            value={studentFormData.classYear}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={4} className='mb-3'>
                        <FormLabel htmlFor='major'>Major</FormLabel>
                        <FormControl 
                            type='text'
                            name='major'
                            id='major'
                            placeholder='Major'
                            value={studentFormData.major}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='medicine'>Part of volunteering is shadowing a healthcare provider. What field of medicine are you interested in?</FormLabel>
                        <FormControl 
                            type='text'
                            name='medicine'
                            id='medicine'
                            value={studentFormData.medicine}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='experience'>Do you have any experience working in Healthcare? If so, explain</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='experience'
                            id='experience'
                            value={studentFormData.experience}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='volunteer'>Why do you want to be a volunteer?</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='volunteer'
                            id='volunteer'
                            value={studentFormData.volunteer}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3'>
                        <FormLabel htmlFor='achieve'>What do you hope to achieve from this experience?</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='achieve'
                            id='achieve'
                            value={studentFormData.achieve}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={{span: 4, offset: 4}} className='mb-3'>
                        <FormLabel htmlFor='resume'>Upload Resume (required)</FormLabel>
                        <FormControl 
                            type='file'
                            name='resume'
                            id='resume'
                            value={studentFormData.resume}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <button className='btn-okb-primary'>Submit</button>
            </Form>
        </Container>
    );
}
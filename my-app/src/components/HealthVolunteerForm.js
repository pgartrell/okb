import React from 'react';
import {Container, Row, Col, Form, FormGroup, 
    FormLabel, FormControl, ButtonGroup, ToggleButton, FormSelect, FormCheck} 
from 'react-bootstrap';
import countryList from 'react-select-country-list';

export default function HealthVolunteerForm() {
    const [healthFormData, setHealthFormData] = React.useState({
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
        hospital: "",
        field: "",
        volunteer: "",
        resume: ""
      });

      const options = React.useMemo(() => countryList().getLabels(), []);

      function handleChange(event) {
        const {name, value, type, checked} = event.target
        setHealthFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
      function handleSubmit(value) {
        console.log(`Form State: ${JSON.stringify(healthFormData)}`);
        alert(`Form State: ${JSON.stringify(healthFormData)}`);
      }

    return (
        <Container className="volunteer-form-container">
            <h2 className='volunteer-form-title'>Health Professional Volunteer Form</h2>
            <p className='volunteer-form-text'>Use the form to apply to become a volunteer</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <p className='volunteer-form-details'>Your Details</p>
                    <FormGroup as={Col} className='mb-3 volunteer-form-radio'>
                    <FormCheck
                            inline
                            type='radio'
                            name='type'
                            id='individual'
                            value='individual'
                            checked={healthFormData.type === 'individual'}
                            onChange={handleChange}
                        />
                        <FormLabel htmlFor='individual'>Individual</FormLabel>
                    </FormGroup>
                    <FormGroup as={Col} className='mb-3 volunteer-form-group'>
                    <FormCheck
                            inline
                            type='radio'
                            name='type'
                            id='business'
                            value='business'
                            checked={healthFormData.type === 'business'}
                            onChange={handleChange}
                        />
                        <FormLabel htmlFor='business'>Business/Organization</FormLabel>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel  htmlFor='firstName'>First Name*</FormLabel>
                        <FormControl
                                type='text'
                                name='firstName'
                                id='firstName'
                                placeholder='First Name'
                                value={healthFormData.firstName}
                                onChange={handleChange}
                        />
                    </FormGroup>    
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='lastName'>Last Name*</FormLabel>
                        <FormControl
                                type='text'
                                name='lastName'
                                id='lastName'
                                placeholder='Last Name'
                                value={healthFormData.lastName}
                                onChange={handleChange}
                        />
                    </FormGroup>    
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='email'>Email*</FormLabel>
                        <FormControl
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={healthFormData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                        <FormControl
                            type='phone'
                            name='phone'
                            id='phone'
                            placeholder='+1-123-456-7890'
                            value={healthFormData.phone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='ext'>Ext.</FormLabel>
                        <FormControl
                            type='phone'
                            name='ext'
                            id='ext'
                            placeholder='123'
                            value={healthFormData.ext}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='m-auto'>
                        <ButtonGroup>{healthFormData.phoneOption.map((option, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`option-${idx}`}
                                type='radio'
                                size='md'
                                variant='secondary'
                                name='phoneOption'
                                value={healthFormData.phoneOption.value}
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
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='address1'>Address Line 1</FormLabel>
                        <FormControl
                            type='address'
                            name='address1'
                            id='address1'
                            placeholder='Address Line 1'
                            value={healthFormData.address1}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='address2'>Address Line 2</FormLabel>
                        <FormControl
                            type='address'
                            name='address2'
                            id='address2'
                            placeholder='Address Line 2'
                            value={healthFormData.address2}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='city'>City</FormLabel>
                        <FormControl
                            type='city'
                            name='city'
                            id='city'
                            placeholder='City'
                            value={healthFormData.city}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='state'>State/Province</FormLabel>
                        <FormControl
                            type='state'
                            name='state'
                            id='state'
                            placeholder='State/Province'
                            value={healthFormData.state}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='postalCode'>Postal Code</FormLabel>
                        <FormControl
                            type='postal'
                            name='postal'
                            id='postalCode'
                            placeholder='Postal Code'
                            value={healthFormData.postalCode}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={3} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='country'>Country</FormLabel>
                            <FormSelect>{options.map((country) => (
                                <option>{country}</option>
                            ))}
                            </FormSelect>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} className='mb-3 volunteer-form-group'>
                        <FormCheck
                            inline
                            type='checkbox'
                            name='anonymous'
                            id='anonymous'
                            value={healthFormData.anonymous}
                            onChange={handleChange}
                        />
                        <FormLabel htmlFor='anonymous'>Make this activity anonymous</FormLabel>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='message'>Message of Support (Will be displayed on public site)</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='message'
                            id='message'
                            placeholder='Message'
                            value={healthFormData.message}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='hospital'>Hospital Affiliation</FormLabel>
                        <FormControl 
                            type='text'
                            name='hospital'
                            id='hospital'
                            placeholder='Hospital Affiliation'
                            value={healthFormData.hospital}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup as={Col} xs={12} lg={6} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='field'>What is your respective field?</FormLabel>
                        <FormControl 
                            type='text'
                            name='field'
                            id='field'
                            value={healthFormData.field}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                <FormGroup as={Col} xs={12} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='volunteer'>Why do you want to be a volunteer?</FormLabel>
                        <FormControl 
                            as='textarea'
                            name='volunteer'
                            id='volunteer'
                            value={healthFormData.volunteer}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup as={Col} xs={12} lg={{span: 4, offset: 4}} className='mb-3 volunteer-form-group'>
                        <FormLabel htmlFor='resume'>Upload Resume (required)</FormLabel>
                        <FormControl 
                            type='file'
                            name='resume'
                            id='resume'
                            value={healthFormData.resume}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <button className='btn-okb-primary'>Submit</button>
            </Form>
        </Container>
    );
};
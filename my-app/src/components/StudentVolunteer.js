import React from 'react';
import {Container, Row, Col, Form, FormGroup, FormLabel, FormCheck} from 'react-bootstrap';

export default function StudentVolunteerForm() {
    const [studentFormData, setStudentFormData] = React.useState({
        type: "",
        firstName: "",
        lastName: ""
      });
    
      function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setStudentFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
          };
        });
      }
    
      function handleSubmit() {
        console.log(`Form State: ${JSON.stringify(studentFormData)}`);
        alert(`Form State: ${JSON.stringify(studentFormData)}`);
      }
    return (
        <div>
            <h2>Student Volunteer Form</h2>
            <p>Use the form to apply to become a volunteer</p>
            <Form>
                <FormGroup row>
                    <h4>Your Details</h4>
                    <FormCheck>
                    <input
                        type="radio"
                        name="type"
                        id="individual"
                        value="individual"
                        onChange={handleChange}
                        checked={studentFormData.type === "individual"}
                    />{' '}
                        <FormLabel htmlFor="individual">Individual</FormLabel>
                    </FormCheck>
                    
                    <FormCheck>
                        <input
                            type="radio"
                            name="type"
                            id="business"
                            value="business"
                            onChange={handleChange}
                            checked={studentFormData.type === "business"}
                        />{' '}
                            <FormLabel htmlFor="business">Business/Organization</FormLabel>
                    </FormCheck>
                </FormGroup>

                <FormGroup>
                    <FormLabel htmlFor="firstName">First Name*</FormLabel>
                    <FormCheck>
                    <input
                        type="textarea"
                        name="firstName"
                        id="firstName"
                        value="firstName"
                        onChange={handleChange}
                    />
                    </FormCheck>
                </FormGroup>      
            </Form>
        </div>
    );
}